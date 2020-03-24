import Axios from 'axios';
import cheerio from 'cheerio';

const siteUrl = "https://economictimes.indiatimes.com/coronavirus";


const fetchData = async () => {
    const result = await Axios.get(siteUrl);
    return cheerio.load(result.data);
};

const getResults = async () => {
    const $ = await fetchData();
    var data;
    var json = { data: "", date: "", time: "" };
    $('.updateText').filter(function () {
        var temp_data = $(this);
        data = temp_data.children().text();
        json.data = data;
    })
    console.log(json);
}

export const scrappedData = {
    getResults
}