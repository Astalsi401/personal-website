import pandas as pd
from xlsxwriter import Workbook
from ga4Api_vars import default


class List(list):
    def to_excel(self, workBook: Workbook, workSheet: Workbook.worksheet_class, row: int, col: int, fmt=default):
        # list to excel
        for i, rowData in enumerate(self):
            for j, colData in enumerate(rowData):
                workSheet.write(row+i, col+j, colData, workBook.add_format({**fmt, 'num_format': 'm/d'} if type(colData) == pd._libs.tslibs.timestamps.Timestamp else fmt))


def num_to_col(num):
    col = ''
    while num > 0:
        num -= 1
        mod = num % 26
        col = chr(65 + mod) + col
        num //= 26
    return col
