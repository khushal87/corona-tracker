import React, { Component } from 'react';
import './WorldData.css';
import Axios from 'axios';

class WorldData extends Component {
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

    render() {
        return (
            <div className="worldData">
                <table>
                    <tr>
                        <th>Country</th>
                        <th style={{ color: "red" }}>Cases</th>
                        <th style={{ color: "white" }}>Active Cases</th>
                        <th style={{ color: "#282c34" }}>Deaths</th>
                        <th style={{ color: "green" }}>Recovered</th>
                    </tr>
                    {this.state.filter_data.map((indiData) => {
                        return <tr>
                            <td>{indiData.country_name}</td>
                            <td>{indiData.cases + " " + `[+${indiData.new_cases}]`}</td>
                            <td>{indiData.active_cases}</td>
                            <td>{indiData.deaths + " " + `[+${indiData.new_deaths}]`}</td>
                            <td>{indiData.total_recovered}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}

export default WorldData;