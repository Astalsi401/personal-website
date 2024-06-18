import os
import logging
import pandas as pd
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest, DateRange


os.chdir(os.path.dirname(os.path.abspath(__file__)))
# Set environment variables
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = f'../client/client_secrets.json'
report_path = '../db'


def creat_folder(path: str) -> str:
    # 如果路徑不存在則創建並回傳路徑
    os.makedirs(path, exist_ok=True)
    return path


def ga4_response_to_df(response) -> pd.DataFrame:
    # 將GA4 API回傳的資料轉為dataframe
    all_data = []
    for row in response.rows:
        row_data = {}
        for i in range(0, len(response.dimension_headers)):
            row_data.update({response.dimension_headers[i].name: row.dimension_values[i].value})
        for i in range(0, len(response.metric_headers)):
            row_data.update({response.metric_headers[i].name: row.metric_values[i].value})
        all_data.append(row_data)
    return pd.DataFrame(all_data)


class Ga4Reports:
    def __init__(self, property_id: int, start: str, end: str, dimensions: list[str] = [], metrics: list[str] = [], offset=0) -> None:
        self.property_id = property_id
        self.start = start
        self.end = end
        self.dimensions = dimensions
        self.metrics = metrics
        self.current_offset = offset
        self.client = BetaAnalyticsDataClient()
        self.results = []
        self.limit = 100000

    def get_data(self) -> pd.DataFrame:
        request = RunReportRequest(
            property=f"properties/{self.property_id}",
            dimensions=[{'name': d} for d in self.dimensions],
            metrics=[{'name': m} for m in self.metrics],
            date_ranges=[DateRange(start_date=self.start, end_date=self.end)],
            limit=self.limit,
            offset=self.current_offset,
        )
        response = self.client.run_report(request)
        return ga4_response_to_df(response)

    def run(self) -> list:
        while True:
            df = self.get_data()
            self.results.append(df)
            self.current_offset += self.limit
            if len(df) < self.limit:
                break
        return self.results


def download(property_id: int, site: str, tab: str, start: str, end: str, dimensions: list[str] = [], metrics: list[str] = [], offset=0) -> pd.DataFrame:
    '''
    下載GA資料並儲存為.pkl
    property_id = 資源ID
    site = 網站英文代號
    tab = 表格類型
    start = 開始日期
    end = 結束日期
    '''
    path = creat_folder(f'{report_path}/{site}/{f"{start}-{end}" if start != end else start}')
    results = Ga4Reports(property_id, start, end, dimensions, metrics, offset).run()
    df = pd.concat(results)
    df.to_pickle(f'{path}/{tab}.pkl')
    logging.info(f'{path}/{tab}.pkl saved!')
    return df
