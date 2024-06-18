from ga4Api_date import DateRange

# daterange = DateRange(dt.strptime('2023-12-31', '%Y-%m-%d').date())
daterange = DateRange()

# excel格式
default = {
    "align": "center",
    "valign": "vcenter",
    'bold': True,
    'border': 1,
    'border_color': 'white',
    'fg_color': '#dce6f1',
    'font_name': '微軟正黑體',
    'font_size': 12
}
defaultLeft = {**default, 'align': 'left'}
blue = {**default, 'fg_color': '#1f497d', 'font_color': 'white'}
red1 = {**default, 'fg_color': '#963634', 'font_color': 'white'}
red2 = {**default, 'fg_color': '#f2dcdb'}
green1 = {**default, 'fg_color': '#31869b', 'font_color': 'white'}
green2 = {**default, 'fg_color': '#76933c', 'font_color': 'white'}


# 建立從GA抓取數據所需的資訊
# site為網站英文代號，用以建立儲存GA歷史資料的資料夾
# sheet為匯出至excel的分頁名稱
# property_id為資源ID
# tabA為表格A所需的欄位， 依此類推
# dimensions_A_1 為表格A需要下載的第一個檔案的dimensions， 依此類推


class Site:
    def __init__(self, site: str, sheet: str, property_id: int, tabA=[], tabB=[], tabC0=[], tabC=[]) -> None:
        self.site = site
        self.sheet = sheet
        self.property_id = property_id
        self.tabA = ['總人次', '日平均', '總人數', '國內', '國際', '平均瀏覽頁數', '平均停留時間', '跳出率(%)']+tabA
        self.tabB = ['自然搜尋(%)', '直接流量(%)', '直效推廣(%)', '廣告流量(%)', '社群流量(%)', '外部連結(%)', '電子報', 'LINE', 'FB', '廣告流量']+tabB
        self.tabC0 = ['自然搜尋', '直接流量', '直效推廣', '廣告流量', '社群流量', '外部連結', '電子報', 'LINE', 'FB']+tabC0
        self.tabC = ['date', '總人次', '總人數', '國內', '國際', '自然搜尋', '直接流量', '直效推廣', '廣告流量', '外部連結', '社群流量', '電子報', 'LINE', 'FB', '平均瀏覽頁數', '平均停留時間', '跳出率(%)']+tabC
        self.dimensions_A_1 = ['country']
        self.metrics_A_1 = ['sessions', 'activeUsers', 'ecommercePurchases', 'purchaseRevenue']
        self.metrics_A_2 = ['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']
        self.dimensions_B = ['sessionSourceMedium']
        self.metrics_B = ['sessions']
        self.dimensions_C_1 = ['yearWeek', 'sessionSourceMedium', 'country']
        self.metrics_C_1 = ['sessions', 'activeUsers', 'ecommercePurchases', 'purchaseRevenue']
        self.dimensions_C_2 = ['yearWeek']
        self.metrics_C_2 = ['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']
        self.dimensions_C_3 = ['date', 'sessionSourceMedium', 'country']
        self.metrics_C_3 = ['sessions', 'activeUsers', 'ecommercePurchases', 'purchaseRevenue']
        self.dimensions_C_4 = ['date']
        self.metrics_C_4 = ['screenPageViewsPerSession', 'averageSessionDuration', 'bounceRate']
        self.dimensions_D = ['unifiedScreenName']
        self.metrics_D = ['screenPageViews', 'averageSessionDuration']
