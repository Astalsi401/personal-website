import logging
import xlsxwriter
import pandas as pd
from ga4Api_vars import Site, daterange, default, defaultLeft, blue, red1, red2, green1, green2, DateRange
from ga4Api_report import DownloadData
from ga4Api_chart import graph
from ga4Api_to_excel import List


class ReportSheet:
    def __init__(self, daterange: DateRange = daterange) -> None:
        self.daterange = daterange
        self.xlsx_path = '../xlsx/網群監測報告GA4.xlsx'
        self.xlsx_file = xlsxwriter.Workbook(self.xlsx_path)
        self.summary = []

    def _rep_summary(self, df: pd.DataFrame) -> None:
        '''store year views and average views of each site'''
        df = df[['總人次', '日平均']].iloc[:2].T
        df_res = [df.iloc[0:1], df.iloc[1:2]]
        dateranges = [self.daterange.lastyear, self.daterange.year]
        for i, columns in enumerate([[f'{dates.end.year}總瀏覽人次{f'({dates.end.month}月)' if dates.end.year == daterange.year.end.year else ''}' for dates in dateranges], [f'{dates.end.year}日均' for dates in dateranges]]):
            df_res[i].columns = columns
            df_res[i].reset_index(drop=True, inplace=True)
        df_res = pd.concat(df_res, axis=1)
        df_res['site'] = self.site.sheet
        self.summary.append(df_res)

    def _get_summary(self) -> pd.DataFrame:
        '''write summary to excel when save() is called'''
        self.sheet = self.xlsx_file.add_worksheet('總計')
        self.sheet.set_column(0, 4, 25)
        df = pd.concat(self.summary)
        df = df.reindex(columns=['site'] + [col for col in df.columns if col != 'site'])
        df = pd.concat([df, df.sum(numeric_only=True).to_frame().T])
        df['site'] = df['site'].fillna('總計')
        List([['' if col == 'site' else col for col in df.columns]]).to_excel(self.xlsx_file, self.sheet, row=0, col=0, fmt=blue)
        List([[value] for value in df['site'].values.tolist()]).to_excel(self.xlsx_file, self.sheet, row=1, col=0, fmt=blue)
        List(df[[col for col in df.columns if col != 'site']].values.tolist()).to_excel(self.xlsx_file, self.sheet, row=1, col=1, fmt=default)

    def _write_tab_A(self) -> None:
        '''should only be called in get_site_report()'''
        df = pd.concat([self._report.repA(dates) for dates in [self.daterange.lastyear, self.daterange.year, self.daterange.lastyearWeek, self.daterange.lastweek, self.daterange.week]])
        self._rep_summary(df)
        List([[''], [self.daterange.lastyear.start.year], [self.daterange.year.start.year], ['去年同期'],
              [f"{self.daterange.lastweek.start.strftime('%m/%d')} - {self.daterange.lastweek.end.strftime('%m/%d')}"],
              [f"{self.daterange.week.start.strftime('%m/%d')} - {self.daterange.week.end.strftime('%m/%d')}"]]).to_excel(self.xlsx_file, self.sheet, row=4, col=1, fmt=blue)
        List([df.columns.to_list()]).to_excel(self.xlsx_file, self.sheet, row=4, col=2, fmt=blue)
        List(df.fillna(0).values.tolist()).to_excel(self.xlsx_file, self.sheet, row=5, col=2)
        List(df.fillna(0).values.tolist()[2:3]).to_excel(self.xlsx_file, self.sheet, row=7, col=2, fmt=red2)
        List([['去年同期']]).to_excel(self.xlsx_file, self.sheet, row=7, col=1, fmt=red1)

    def _write_tab_B(self) -> None:
        '''should only be called in get_site_report()'''
        df = pd.concat([self._report.repB(dates) for dates in [self.daterange.lastyear, self.daterange.year, self.daterange.lastyearWeek, self.daterange.lastweek, self.daterange.week]])
        self.sheet.merge_range('C12:H12', '管道瀏覽占比', self.xlsx_file.add_format(green1))
        self.sheet.merge_range('I12:L12', '行銷工具瀏覽人次', self.xlsx_file.add_format(green2))
        List([[''], [''], [self.daterange.lastyear.start.year], [self.daterange.year.start.year], ['去年同期'],
              [f"{self.daterange.lastweek.start.strftime('%m/%d')} - {self.daterange.lastweek.end.strftime('%m/%d')}"],
              [f"{self.daterange.week.start.strftime('%m/%d')} - {self.daterange.week.end.strftime('%m/%d')}"]]).to_excel(self.xlsx_file, self.sheet, row=11, col=1, fmt=blue)
        List([df.columns.to_list()]).to_excel(self.xlsx_file, self.sheet, row=12, col=2, fmt=blue)
        List(df.fillna(0).values.tolist()).to_excel(self.xlsx_file, self.sheet, row=13, col=2)
        List(df.fillna(0).values.tolist()[2:3]).to_excel(self.xlsx_file, self.sheet, row=15, col=2, fmt=red2)
        List([['去年同期']]).to_excel(self.xlsx_file, self.sheet, row=15, col=1, fmt=red1)

    def _write_tab_C(self) -> None:
        '''should only be called in get_site_report()'''
        dfC0 = self._report.repB(self.daterange.year, 2).merge(self._report.repA(self.daterange.year), left_index=True, right_index=True).reindex(columns=self.site.tabC)
        dfC0['date'] = self.daterange.year.start.strftime('%Y')
        dfC1 = dfC0.T.merge(self._report.repC(self.daterange.oneYear, 1), left_index=True, right_index=True)
        dfC2 = self._report.repC(self.daterange.year, 2)
        List([['每週']] + [[item] for item in dfC1.index.tolist() if item != 'date']).to_excel(self.xlsx_file, self.sheet, row=4, col=13, fmt=blue)
        List([['每日']] + [[item] for item in dfC1.index.tolist() if item != 'date']).to_excel(self.xlsx_file, self.sheet, row=28, col=13, fmt=blue)
        List(dfC1.fillna(0).values.tolist()[:1]).to_excel(self.xlsx_file, self.sheet, row=4, col=14, fmt=blue)
        List(dfC1.fillna(0).values.tolist()[1:]).to_excel(self.xlsx_file, self.sheet, row=5, col=14)
        List(dfC2.fillna(0).values.tolist()[:1]).to_excel(self.xlsx_file, self.sheet, row=28, col=14, fmt=blue)
        List(dfC2.fillna(0).values.tolist()[1:]).to_excel(self.xlsx_file, self.sheet, row=29, col=14)
        # line graph basic on tab C
        graph(self.site, self.xlsx_file, self.sheet, dfC1.iloc[0])

    def _write_tab_D(self) -> None:
        '''should only be called in get_site_report()'''
        dfD1 = self._report.repD(self.daterange.week)
        dfD2 = self._report.repD(self.daterange.year)
        self.sheet.merge_range('B20:D20', '當週熱門瀏覽', self.xlsx_file.add_format(blue))
        List([['網頁瀏覽量', '平均停留時間']]).to_excel(self.xlsx_file, self.sheet, row=19, col=4, fmt=blue)
        List([row[:1] for row in dfD1.fillna('').values.tolist()]).to_excel(self.xlsx_file, self.sheet, row=20, col=1, fmt=defaultLeft)
        List([row[1:] for row in dfD1.fillna('').values.tolist()]).to_excel(self.xlsx_file, self.sheet, row=20, col=2)
        self.sheet.merge_range('H20:J20', '今年累計熱門瀏覽', self.xlsx_file.add_format(blue))
        List([['網頁瀏覽量', '平均停留時間']]).to_excel(self.xlsx_file, self.sheet, row=19, col=10, fmt=blue)
        List([row[:1] for row in dfD2.fillna('').values.tolist()]).to_excel(self.xlsx_file, self.sheet, row=20, col=7, fmt=defaultLeft)
        List([row[1:] for row in dfD2.fillna('').values.tolist()]).to_excel(self.xlsx_file, self.sheet, row=20, col=8)

    def get_site_report(self, site: Site) -> None:
        self.site = site
        self._report = DownloadData(self.site)
        self.sheet = self.xlsx_file.add_worksheet(self.site.sheet)
        self.sheet.set_column(0, 0, 1)
        self.sheet.set_column(1, 13, 18)
        self.sheet.set_column(14, 114, 12)
        self.sheet.set_row(1, 400)
        [self.sheet.set_row(i, 19) for i in range(4, 51)]
        self._write_tab_A()
        self._write_tab_B()
        self._write_tab_C()
        self._write_tab_D()

    def save(self) -> None:
        self._get_summary()
        self.xlsx_file.close()
        logging.info(f'{self.xlsx_path} saved!')
