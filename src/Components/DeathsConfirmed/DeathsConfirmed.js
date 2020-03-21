import React, { Component } from 'react';
import './DeathsConfirmed.css';

class DeathsConfirmed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter_data: []
        }
    }

    componentDidMount() {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6ff9b0cafcmsh4122e136887acafp1077f4jsn470bb7cc613a"
            }
        })
            .then(response => {
                return response.json();
            }).then((res) => {
                this.setState({ data: res.countries_stat, filter_data: res.countries_stat })
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChangeHandler = (event) => {
        let currentList = [];
        let newList = [];
        if (event.nativeEvent.text !== "") {
            currentList = this.state.data;
            newList = currentList.filter(item => {
                const lc = item.country_name.toLowerCase();
                const filter = event.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.state.data;
        }
        this.setState({ filter_data: newList })
    }

    render() {
        return (
            <div className="countries-data">
                <h3 className="heading">Cases <span style={{ color: "#282c84" }}> Deaths </span>  by Country/Region</h3>
                <i class="fa fa-user icon"></i>
                <input name="search" className="search-input" onChange={this.onChangeHandler} />
                {
                    this.state.filter_data.map((indiData, key) => {
                        return <div className="country-data" key={key}>
                            <div className="country-name">{indiData.country_name + " "} <div className="country-deaths">{indiData.deaths}</div></div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default DeathsConfirmed;