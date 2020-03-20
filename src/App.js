import React, { Component } from 'react';
import './App.css';
import CasesConfirmed from './Components/CasesConfirmed/CasesConfirmed';
import DeathsConfirmed from './Components/DeathsConfirmed/DeathsConfirmed';
import CasesRecovered from './Components/CasesRecovered/CasesRecovered';
import StatesData from './Components/StatesData/StatesData';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      fetch_date: "",
      india_data: {}
    }
  }



  componentDidMount() {
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
      <div className="App">
        <header className="App-header">
          <h2 style={{ margin: "0px", padding: "20px" }}>Coronavirus Cases All Over The World</h2>
          <div className="report row">
            <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
              <div className="cases">
                <h5 className="cases-text">Total Confirmed</h5>
                <h1 className="cases-data">{this.state.data.total_cases}</h1>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
              <div className="deaths">
                <h5 className="deaths-text">Total Deaths</h5>
                <h1 className="deaths-data">{this.state.data.total_deaths}</h1>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-5.5 col-lg-2">
              <div className="recovered">
                <h5 className="recovered-text">Total Recovered</h5>
                <h1 className="recovered-data">{this.state.data.total_recovered}</h1>
              </div>
            </div>
            <div className="column col-xs-12 col-sm-10 col-md-5.5 col-lg-3 new-worldwide">
              <div className="new-cases">
                <h5 className="new-cases-text">New Cases Worldwide </h5>
                <h1 className="new-cases-data">{this.state.data.new_cases}</h1>
              </div>
              <div className="new-deaths">
                <h5 className="new-deaths-text">New Death Cases Worldwide</h5>
                <h1 className="new-deaths-data">{this.state.data.new_deaths}</h1>
              </div>
            </div>
            <div className="column col-xs-12 col-sm-10 col-md-5.5 col-lg-3 new-india" >
              <div className="new-cases">
                <h5 className="new-cases-text">New Cases in India</h5>
                <h1 className="new-cases-data">{this.state.india_data.new_cases}</h1>
              </div>
              <div className="new-deaths">
                <h5 className="new-deaths-text">New Death Cases in India</h5>
                <h1 className="new-deaths-data">{this.state.india_data.new_deaths}</h1>
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
          </div>
        </header>
      </div>
    );
  }
}

export default App;
