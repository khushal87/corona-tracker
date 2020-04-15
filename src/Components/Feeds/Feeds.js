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

    componentDidMount() {
        Axios.get('https://covid19-repo.herokuapp.com/data').then((res) => {
            const data = [...res.data.data];
            data.sort((a, b) => (a.createdAt - b.createdAt)).reverse();
            const temp_data = [];
            for (let i = 0; i < 25; i++) {
                temp_data.push(data[i]);
            }
            console.log(temp_data)
            this.setState({ data: temp_data, filter_data: temp_data });
        })
    }

    render() {
        return (
            <div className="countries-data">
                <h3 className="heading"><span style={{ color: "red" }}>Live Feeds </span> from all over the world</h3>
                {
                    this.state.filter_data.map((indiData, key) => {
                        if (indiData !== undefined) {
                            return <div className="country-data" key={indiData._id}>
                                <a href='#'><div className="country-name">{indiData.description}</div></a>
                                <div className="country-cases" style={{ color: "gray", fontSize: "14px" }}>{moment(indiData.createdAt).format("DD MMM YYYY hh:mm a")}</div>
                            </div>
                        }
                    })
                }
            </div>
        )
    }
}

export default Feeds;