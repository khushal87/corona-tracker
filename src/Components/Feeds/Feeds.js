import React, { Component } from 'react';
import './Feeds.css';
import moment from 'moment';
import Axios from 'axios';

class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter_data: []
        }
    }

    async componentDidMount() {
        Axios.get('https://covid19-repo.herokuapp.com/data').then((res) => {
            this.setState({ data: res.data.data, filter_data: res.data.data });
        })
    }

    render() {
        return (
            <div className="countries-data">
                <h3 className="heading"><span style={{ color: "red" }}>Live Feeds </span> from all over the world</h3>
                {
                    this.state.filter_data.map((indiData, key) => {
                        return <div className="country-data" key={key}>
                            <a href={indiData.url}><div className="country-name">{indiData.description + " "}</div></a>
                            <div className="country-cases" style={{ color: "gray", fontSize: "14px" }}>{indiData.date}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Feeds;