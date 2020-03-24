import React, { Component } from 'react';
import CasesConfirmed from '../../Components/CasesConfirmed/CasesConfirmed';
import DeathsConfirmed from '../../Components/DeathsConfirmed/DeathsConfirmed';
import CasesRecovered from '../../Components/CasesRecovered/CasesRecovered';
import StatesData from '../../Components/StatesData/StatesData';
import './Homepage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Blink from 'react-blink-text';
import Feeds from '../../Components/Feeds/Feeds';
import Axios from 'axios';
import cheerio from 'cheerio';
import { scrappedData } from '../../Services/EconomicTimesData';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            fetch_date: "",
            india_data: {},
        }
    }

    fetchData = async () => {
        const siteUrl = "https://economictimes.indiatimes.com/coronavirus";

    };

    componentDidMount() {
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        const siteUrl = "https://economictimes.indiatimes.com/coronavirus";
        Axios.get(siteUrl, config).then(response => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6ff9b0cafcmsh4122e136887acafp1077f4jsn470bb7cc613a"
            }
        })
            .then(response => {
                return response.json();
            }).then((res) => {
                this.setState({ data: res })
            })
            .catch(err => {
                console.log(err);
            });
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=INDIA", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6ff9b0cafcmsh4122e136887acafp1077f4jsn470bb7cc613a"
            }
        })
            .then(response => {
                return response.json();
            }).then((res) => {
                this.setState({ india_data: res.latest_stat_by_country[0] })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="homepage">
                <Navbar />
                <header className="App-header">
                    <h2 style={{ margin: "0px", paddingTop: "150px" }}>Coronavirus Cases All Over The World</h2>
                    <div style={{ paddingTop: "5px", marginLeft: "5px", marginRight: "5px" }}>
                        <Blink color='#d9534f ' text='CoronaTrack Requests its Users Remain in Lockdown as per the Orders of Center.' fontSize='18'>
                            CoronaTrack requests its Users remain in lockdown as per the orders of Center.
                            </Blink>
                        <a href="https://www.mohfw.gov.in/pdf/FAQ.pdf">FAQs on Covid-19</a>
                        <a href="https://icmr.nic.in/sites/default/files/upload_documents/COVID_19_Testing_Laboratories.pdf" style={{ paddingLeft: "20px" }}>Test Centres</a>
                    </div>
                    <div className="report row">
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="cases">
                                <h5 className="cases-text">Total Confirmed Cases</h5>
                                <h6 className="new-cases-confirmed">{`[+${this.state.data.new_cases}]`}</h6>
                                <h1 className="cases-data">{this.state.data.total_cases}</h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="deaths">
                                <h5 className="deaths-text">Total Confirmed Deaths</h5>
                                <h6 className="new-deaths-confirmed">{`[+${this.state.data.new_deaths}]`}</h6>
                                <h1 className="deaths-data">{this.state.data.total_deaths}</h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="recovered">
                                <h5 className="recovered-text">Total Recovered</h5>
                                <h1 className="recovered-data">{this.state.data.total_recovered}</h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="cases">
                                <h5 className="cases-text">Total Confirmed Cases in India</h5>
                                <h6 className="new-cases-confirmed">{`[+${this.state.india_data.new_cases}]`}</h6>
                                <h1 className="cases-data">{this.state.india_data.total_cases}</h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="deaths">
                                <h5 className="deaths-text">Total Confirmed Deaths in India</h5>
                                <h6 className="new-deaths-confirmed">{`[+${this.state.india_data.new_deaths ? this.state.india_data.new_deaths : "1"}]`}</h6>
                                <h1 className="deaths-data">{this.state.india_data.total_deaths}</h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
                            <div className="recovered">
                                <h5 className="recovered-text">Total Recovered in India</h5>
                                <h1 className="recovered-data">{this.state.india_data.total_recovered}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <div className="col-xs-11.5 col-sm-10 col-md-5.5 col-lg-4 detailed-data">
                            <CasesConfirmed />
                        </div>
                        <div className="col-xs-11.5 col-sm-10 col-md-5.5 col-lg-4 detailed-data">
                            <DeathsConfirmed />
                        </div>
                        <div className="col-xs-11.5 col-sm-10 col-md-5.5 col-lg-4 detailed-data">
                            <CasesRecovered />
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <div className="col-xs-11.5 col-sm-10 col-md-5.5 col-lg-4 detailed-data">
                            <StatesData />
                        </div>
                        <div className="col-xs-11.5 col-sm-10 col-md-5.5 col-lg-4 detailed-data">
                            <Feeds />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Homepage;