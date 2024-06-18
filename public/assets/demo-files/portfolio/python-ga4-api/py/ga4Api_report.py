import re
import pandas as pd
import numpy as np
from datetime import datetime as dt
from ga4Api_download import download, report_path
from ga4Api_vars import Site
from ga4Api_date import DateRange


noData = 'none'
value_cols = ['sessions', 'activeUsers', 'ecommercePurchases', 'purchaseRevenue']


class DownloadData:
    def __init__(self, site: Site) -> None:
        self.site = site

    def _tabA(self) -> None:
        '''should only be called in _read_data()'''
        download(property_id=self.site.property_id, site=self.site.site, tab='tabA_1', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_A_1, metrics=self.site.metrics_A_1)
        download(property_id=self.site.property_id, site=self.site.site, tab='tabA_2', start=self.dates.start_s, end=self.dates.end_s, metrics=self.site.metrics_A_2)

    def _tabB(self) -> None:
        '''should only be called in _read_data()'''
        download(property_id=self.site.property_id, site=self.site.site, tab='tabB_1', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_B, metrics=self.site.metrics_B)

    def _tabC(self) -> None:
        '''should only be called in _read_data()'''
        download(property_id=self.site.property_id, site=self.site.site, tab='tabC_1', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_C_1, metrics=self.site.metrics_C_1)
        download(property_id=self.site.property_id, site=self.site.site, tab='tabC_2', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_C_2, metrics=self.site.metrics_C_2)
        download(property_id=self.site.property_id, site=self.site.site, tab='tabC_3', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_C_3, metrics=self.site.metrics_C_3)
        download(property_id=self.site.property_id, site=self.site.site, tab='tabC_4', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_C_4, metrics=self.site.metrics_C_4)

    def _tabD(self) -> None:
        '''should only be called in _read_data()'''
        download(property_id=self.site.property_id, site=self.site.site, tab='tabD_1', start=self.dates.start_s, end=self.dates.end_s, dimensions=self.site.dimensions_D, metrics=self.site.metrics_D)

    def _read_data(self, file: str) -> pd.DataFrame:
        '''should only be called in repA(), repB(), repC(), repD()'''
        # file格式為tabA_1.pkl，A_1會改變，去除_1.pkl以選取合適的function
        key = re.sub(r'_\d+.pkl$', '', file)
        # 根據檔案類型以不同function處理
        tab_fucs = {'tabA': self._tabA, 'tabB': self._tabB, 'tabC': self._tabC, 'tabD': self._tabD}
        while True:
            try:
                df = pd.read_pickle(f'{report_path}/{self.site.site}/{self.dates.start_s}-{self.dates.end_s}/{file}')
                break
            except FileNotFoundError:
                # 如果檔案不存在則下載所需檔案
                tab_fucs[key]()
        # 如果沒有資料則回傳一列為None的資料
        return pd.DataFrame({noData: [None]}) if df.empty else df

    def repA(self, dates: DateRange.Range) -> pd.DataFrame:
        self.dates = dates
        df1 = self._read_data('tabA_1.pkl').reindex(columns=['country'] + value_cols)
        df2 = self._read_data('tabA_2.pkl').reindex(columns=['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate'], fill_value=0)
        if noData in df1.columns == df2.columns:
            df = df1
        else:
            df1['country'] = np.where(df1['country'] == 'Taiwan', '國內', '國際')
            df1[value_cols] = df1[value_cols].astype(float)
            df = pd.concat([df1[value_cols].agg('sum').to_frame().T,
                            df1.groupby('country')['activeUsers'].sum().to_frame().T.rename(index={'activeUsers': 0}),
                            df2], axis=1).rename(columns={'sessions': '總人次', 'activeUsers': '總人數', 'ecommercePurchases': '電子商務轉換數', 'purchaseRevenue': '收益', 'screenPageViewsPerSession': '平均瀏覽頁數', 'averageSessionDuration': '平均停留時間', 'bounceRate': '跳出率(%)'})
            df['日平均'] = (df['總人次'] / self.dates.days).round(0)
            df['跳出率(%)'] = df['跳出率(%)'].astype(float) * 100
            df[['平均瀏覽頁數', '跳出率(%)']] = df[['平均瀏覽頁數', '跳出率(%)']].astype(float).round(2)
            df['平均停留時間'] = df['平均停留時間'].apply(lambda x: '{:02d}:{:02d}'.format(*divmod(round(float(x)), 60)))
            df['收益'] = df['收益'].round(0)
        return df.reindex(columns=self.site.tabA, fill_value=None)

    def repB(self, dates: DateRange.Range, v=1) -> pd.DataFrame:
        self.dates = dates
        df = self._read_data('tabB_1.pkl')
        expCols = self.site.tabB if v == 1 else self.site.tabC0
        if noData not in df.columns:
            medium = ['廣告流量', '社群流量', '直效推廣', '自然搜尋', '外部連結']
            df['管道流量'] = np.select(
                condlist=[df['sessionSourceMedium'].str.contains(w) for w in [r'cpc$|^(?:popin|taitra)', r'^fb \/', r'EZMail|newsletter|ibmi_edm|ibmi_web|BenchmarkEmail|edm|inno_edm|line', r'organic$', r'referral$']],
                choicelist=medium,
                default='直接流量')
            df['行銷工具'] = np.select(
                condlist=[df['sessionSourceMedium'].str.contains(w) for w in [r'^EZMail \/', r'line \/', r'^fb \/|facebook']],
                choicelist=['電子報', 'LINE', 'FB'],
                default='')
            df['sessions'] = df['sessions'].astype(int)
            df = pd.concat([df[['管道流量', 'sessions']].groupby('管道流量')['sessions'].sum().to_frame().T.rename(index={'sessions': 0}),
                            df[['行銷工具', 'sessions']].query('行銷工具 != ""').groupby('行銷工具')['sessions'].sum().to_frame().T.rename(index={'sessions': 0})], axis=1)
            medium = [m for m in medium+['直接流量'] if m in df.columns]
            for m in medium:
                df[f'{m}(%)'] = (df[m] / df[medium].sum(axis=1) * 100).round(2)
        return df.reindex(columns=expCols, fill_value=None)

    def repC(self, dates: DateRange.Range, v: int) -> pd.DataFrame:
        self.dates = dates
        if v == 1:
            df1 = self._read_data('tabC_1.pkl')
            df2 = self._read_data('tabC_2.pkl')
            date = 'yearWeek'
            dateCols = self.dates.weeks()
            dfmt = '%Y%U'
        elif v == 2:
            df1 = self._read_data('tabC_3.pkl')
            df2 = self._read_data('tabC_4.pkl')
            date = 'date'
            dateCols = self.dates.dates()
            dfmt = '%Y%m%d'
        if noData in df1.columns == df2.columns:
            df = df1
        else:
            mediums = ['廣告流量', '社群流量', '直效推廣', '自然搜尋', '外部連結']
            tools = ['電子報', 'LINE', 'FB']
            df1['country'] = np.where(df1['country'] == 'Taiwan', '國內', '國際')
            df1[value_cols] = df1[value_cols].astype(float)
            df1['purchaseRevenue'] = df1['purchaseRevenue'].round(0)
            df2[['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']] = df2[['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']].astype(float)
            df2['bounceRate'] = df2['bounceRate'] * 100
            df2[['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']] = df2[['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']].round(2)
            df1['管道流量'] = np.select(
                condlist=[df1['sessionSourceMedium'].str.contains(w) for w in [r'cpc$|^(?:popin|taitra)', r'^fb \/', r'EZMail|newsletter|ibmi_edm|ibmi_web|BenchmarkEmail|edm|inno_edm|line', r'organic$', r'referral$']],
                choicelist=mediums,
                default='直接流量')
            df1['行銷工具'] = np.select(
                condlist=[df1['sessionSourceMedium'].str.contains(w) for w in [r'^EZMail \/', r'line \/', r'^fb \/|facebook']],
                choicelist=tools,
                default='')
            sessions = df1.groupby([date])[value_cols].sum().reset_index()
            country = df1.groupby([date, 'country'])['sessions'].sum().reset_index()
            country = pd.concat([country.query(f'country=="{w}"')[[date, 'sessions']].rename(columns={'sessions': w}).set_index(date) for w in ['國內', '國際']], axis=1)
            medium = df1.groupby([date, '管道流量'])['sessions'].sum().reset_index()
            medium = pd.concat([medium.query(f'管道流量=="{w}"')[[date, 'sessions']].rename(columns={'sessions': w}).set_index(date) for w in mediums + ['直接流量']], axis=1)
            tool = df1.groupby([date, '行銷工具'])['sessions'].sum().reset_index()
            tool = pd.concat([tool.query(f'行銷工具=="{w}"')[[date, 'sessions']].rename(columns={'sessions': w}).set_index(date) for w in tools], axis=1)
            df = sessions.merge(pd.concat([country, medium, tool], axis=1).reset_index(level=0), on=date, how='outer').merge(df2, on=date, how='outer').merge(pd.DataFrame({date: [d[0].strftime(dfmt) for d in dateCols]}), on=date, how='right').rename(columns={'sessions': '總人次', 'activeUsers': '總人數', 'screenPageViewsPerSession': '平均瀏覽頁數', 'averageSessionDuration': '平均停留時間', 'bounceRate': '跳出率(%)', 'ecommercePurchases': '電子商務轉換數', 'purchaseRevenue': '收益'})
            df['平均停留時間'] = df['平均停留時間'].fillna(0).apply(lambda x: '{:02d}:{:02d}'.format(*divmod(round(float(x)), 60)))
            def fmt(x): return dt.strptime(f'{x}0', '%Y%U%w') if v == 1 else dt.strptime(x, '%Y%m%d')
            df['date'] = df[date].apply(lambda x: fmt(x)).astype('datetime64[ns]')
        return df.fillna(0).reindex(columns=self.site.tabC, fill_value=None).loc[::-1].T

    def repD(self, dates: DateRange.Range) -> pd.DataFrame:
        self.dates = dates
        df = self._read_data('tabD_1.pkl').head(30)
        df['averageSessionDuration'] = df['averageSessionDuration'].apply(lambda x: '{:02d}:{:02d}'.format(*divmod(round(float(x)), 60)))
        df['screenPageViews'] = df['screenPageViews'].apply(int)
        return df.reindex(columns=['unifiedScreenName', 'A', 'B', 'screenPageViews', 'averageSessionDuration'], fill_value=None)
