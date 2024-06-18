import os
import logging
from ga4Api_vars import Site
from ga4Api_report_to_sheet import ReportSheet

os.chdir(os.path.dirname(__file__))


def main() -> None:
    personal_site = Site(site='personal_site', sheet='個人網站', property_id=259254158)
    reports = ReportSheet()
    reports.get_site_report(personal_site)
    reports.save()


if __name__ == '__main__':
    logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.INFO, handlers=[logging.FileHandler('../.temp/ga.log'), logging.StreamHandler()])
    main()
