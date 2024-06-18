from datetime import datetime as dt, timedelta as td, date

dateFmt = '%Y-%m-%d'


class DateRange:
    class Range:
        def __init__(self, start: date, end: date) -> None:
            self.start = start
            self.end = end
            self.start_s = self.start.strftime(dateFmt)
            self.end_s = self.end.strftime(dateFmt)
            self.days = (self.end - self.start).days + 1

        def dates(self) -> list:
            # 回傳開始到結束間每一天的日期
            return [[j, j] for i in range(self.days) for j in [(self.start + td(days=i))] if j < self.end]

        def weeks(self) -> list:
            # 回傳開始到結束間每週日的日期
            return [[(self.start + td(days=i)), (self.start + td(days=i + 6))] for i in range(0, self.days, 7) if self.start + td(days=i + 6) < self.end]

    def __init__(self, input_date=dt.today().date()) -> None:
        year, weekISO, day_of_week = input_date.isocalendar()
        week_start = self._weekday(input_date)
        lastyear_week = dt.strptime(f'{year-1}-{weekISO}-0', '%Y-%U-%w').date()
        # 輸入日期的前一週
        self.week = self.Range(week_start, week_start + td(days=6))
        # 輸入日期的前前週
        self.lastweek = self.Range(self.week.start - td(days=7), self.week.end - td(days=7))
        # 今年
        self.year = self.Range(date(year, 1, 1), input_date)
        # 去年
        self.lastyear = self.Range(date(year - 1, 1, 1), date(year - 1, 12, 31))
        # 過去一年
        self.oneYear = self.Range(self._weekday(date(year - 1, 1, 1)) + td(days=7), input_date)
        # 去年與今天同一週
        self.lastyearWeek = self.Range(lastyear_week - td(days=7), lastyear_week - td(days=1))

    def _weekday(self, input_date: date) -> date:
        # 回傳輸入日期前一週的週日
        return input_date - td(days=input_date.weekday() + 8)
