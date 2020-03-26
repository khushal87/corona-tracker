import React, { Component } from 'react';
import './Hospitals.css';
import Navbar from '../../Components/Navbar/Navbar';
import Axios from 'axios';


class Hospitals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            statewise: [],
            sources: {}
        }
    }

    componentDidMount() {
        Axios.get('https://api.rootnet.in/covid19-in/stats/hospitals').then((res) => {
            const state_data = [];
            for (let i = 0; i < res.data.data.regional.length - 1; i++) {
                state_data.push(res.data.data.regional[i]);
            }
            this.setState({ data: res.data.data.summary, sources: res.data.data.sources[0], statewise: state_data });
        })
    }

    render() {
        return (
            <div className="hospitals">
                <Navbar />
                <header className="App-header">
                    <div className="main">
                        <h2 className="heading" style={{ margin: "0px" }}>Hospitals</h2>
                        <h5 className="content">Get latest stats about the hospitals and there beds availability statewise.</h5>
                    </div>
                </header>
                <div className="main-contact">
                    <h4>Total Rural Hospitals | Total Rural Hospital Beds</h4>
                    <a style={{ fontSize: "20px" }} href="#">{this.state.data.ruralHospitals + "    |   " + this.state.data.ruralBeds}</a>
                    <h4>Total Urban Hospitals | Total Urban Hospital Beds</h4>
                    <a style={{ fontSize: "20px" }} href="#">{this.state.data.urbanHospitals + "    |   " + this.state.data.urbanBeds}</a>
                    <h4>Total Hospitals | Total Hospital Beds</h4>
                    <a style={{ fontSize: "20px" }} href="#">{this.state.data.totalHospitals + "    |   " + this.state.data.totalBeds}</a>
                    <h5>Source - <a href={this.state.sources.url}>{this.state.sources.url}</a></h5>
                </div>
                <table style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "40px", borderCollapse: "collapse" }} class="table table-striped">
                    <thead>
                        <tr><th style={{ textAlign: "center" }}>State</th>
                            <th style={{ textAlign: "center" }}>Rural Hospitals and Beds</th>
                            <th style={{ textAlign: "center" }}>Urban Hospitals and Beds</th>
                            <th style={{ textAlign: "center" }}>Total Hospitals and Beds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.statewise.map((indiData) => {
                            return <tr>
                                <td>{indiData.state}</td>
                                <td>{indiData.ruralHospitals + " | " + indiData.ruralBeds}</td>
                                <td>{indiData.urbanHospitals + " | " + indiData.urbanBeds}</td>
                                <td>{indiData.totalHospitals + " | " + indiData.totalBeds}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Hospitals;