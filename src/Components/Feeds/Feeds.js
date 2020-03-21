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
        var url = 'http://newsapi.org/v2/everything?' +
            'q=coronavirus&' +
            'from=2020-03-21&' +
            'sortBy=popularity&' +
            'apiKey=c88a88b563db4cc590a77cfeda6ecf04';

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                return (response.json());
            }).then((res) => {
                this.setState({ data: res.articles, filter_data: res.articles });
            })
    }

    render() {
        return (
            <div className="countries-data">
                <h3 className="heading"><span style={{ color: "red" }}>Live Feeds </span> from all over the world</h3>
                <i class="fa fa-user icon"></i>
                <input name="search" className="search-input" onChange={this.onChangeHandler} />
                {
                    this.state.filter_data.map((indiData, key) => {
                        return <div className="country-data" key={key}>
                            <a href={indiData.url}><div className="country-name">{indiData.title + " "}</div></a>
                            <div className="country-cases" style={{ color: "gray", fontSize: "14px" }}>{moment(indiData.publishedAt).format('D MMM YYYY  HH:mm')}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Feeds;