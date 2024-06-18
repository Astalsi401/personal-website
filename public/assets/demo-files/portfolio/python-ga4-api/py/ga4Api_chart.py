import pandas as pd
from xlsxwriter import Workbook
from ga4Api_to_excel import num_to_col
from ga4Api_vars import Site, daterange


def graph(site: Site, workbook: Workbook, sheet: Workbook.worksheet_class, x_data: pd.Series) -> None:
    start = 15  # O欄
    end = num_to_col(sum(x_data.notna()) - 1 + start)  # 計算週數 - 1(減去今年累計欄位) + 15(添加於O欄之後)
    # chart1
    chart1 = workbook.add_chart({'type': 'scatter', 'subtype': 'straight_with_markers'})
    # chart1 marker heightlight
    chart1.add_series({
        'name': f'={site.sheet}!$N$6',
        'categories':  f'={site.sheet}!$P$5:${end}$5',
        'values': f'={site.sheet}!$P$6:${end}$6',
        'data_labels': {'value': True, 'position': 'above', 'custom': [{'font': {'color': '#963634', 'size': 20, 'bold': 1}} if d.date() in [daterange.week.start, daterange.lastyearWeek.start] else {'delete': True} for d in x_data.to_list()[1:]]}
    })
    for i, d in enumerate(x_data.to_list()[1:]):
        if d.date() in [daterange.week.start, daterange.lastyearWeek.start]:
            col = num_to_col(start+i+1)
            chart1.add_series({
                'categories':  f'={site.sheet}!${col}$5',
                'values': f'={site.sheet}!${col}$6',
                'line': {'none': True},
                'marker': {
                    'type': 'diamond',
                    'border': {'color': '#963634'},
                    'fill': {'color': '#963634'},
                    'size': 7
                },
            })
    chart1.set_legend({'none': True})
    chart1.set_title({'name': '總人次'})
    # chart2
    chart2 = workbook.add_chart({'type': 'scatter', 'subtype': 'straight_with_markers'})
    for i in range(10, 16):
        chart2.add_series({
            'name': f'={site.sheet}!$N${i}',
            'categories':  f'={site.sheet}!$P$5:${end}$5',
            'values': f'={site.sheet}!$P${i}:${end}${i}'
        })
    for cell, chart in [('B2', chart1), ('K2', chart2)]:
        chart.set_style(2)
        chart.set_size({'width': 1178, 'height': 532})
        chart.set_y_axis({'major_gridlines': {
            'visible': True,
            'line': {'width': 1, 'color': '#d9d9d9'}
        }})
        chart.set_x_axis({
            'min': x_data.to_list()[-1],
            'max': x_data.to_list()[1],
            'major_unit': 30,
            'major_unit_type': 'months',
            'num_format': 'YYYY/MM'
        })
        sheet.insert_chart(cell, chart)
