import scrapy
import json


class CovidSpider(scrapy.Spider):
    name = "covidscrape"
    start_urls = ["https://economictimes.indiatimes.com/coronavirus"]

    def parse(self, response):
        open("./data.json", "w").close()
        for x in response.xpath('//*[@id="contentBox"]/div/div'):
            heading = x.xpath("./div[1]/h4/text()").extract_first()
            date = x.xpath(".//time/text()").extract_first()
            if heading is not None:
                yield {"data": {"heading": heading, "date": date}}
