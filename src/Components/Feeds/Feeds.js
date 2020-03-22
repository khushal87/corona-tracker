import React, { Component } from 'react';
import './Feeds.css';
import moment from 'moment';

class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter_data: []
        }
    }
    componentDidMount() {
        const data = [
            { title: "Railway halts operation of all trains except goods trains till March 31st as Covid-19 cases rise in India: Railway ministry", date: "22 Mar,2020 1:33pm" },
            { title: "Coronavirus cases In India rises to 341 and death tolls rises to 6", date: "22 Mar,2020 1:15pm" },
            { title: "Mumbai local trains to be shut by Railways from tonight till march end", date: "22 Mar,2020 1:44pm" },

        ].sort((a, b) => a.date - b.data)
        this.setState({ data: data, filter_data: data })
    }

    render() {
        return (
            <div className="countries-data">
                <h3 className="heading"><span style={{ color: "red" }}>Live Feeds </span> from all over the world</h3>
                {
                    this.state.filter_data.map((indiData, key) => {
                        return <div className="country-data" key={key}>
                            <a href={indiData.url}><div className="country-name">{indiData.title + " "}</div></a>
                            <div className="country-cases" style={{ color: "gray", fontSize: "14px" }}>{indiData.date}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Feeds;