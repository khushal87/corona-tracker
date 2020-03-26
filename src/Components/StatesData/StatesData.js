import React, { Component } from 'react';
import './StatesData.css';
import Axios from 'axios';

class StatesData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter_data: []
        }
    }
    componentDidMount() {
        Axios.get('https://api.covid19india.org/data.json').then((res) => {
            const data = res.data.statewise;
            const temp_data = [];
            for (let i = 1; i < data.length; i++) {
                temp_data.push(data[i]);
            }
            this.setState({ data: temp_data, filter_data: temp_data });
        })
    }

    onChangeHandler = (event) => {
        let currentList = [];
        let newList = [];
        if (event.nativeEvent.text !== "") {
            currentList = this.state.data;
            newList = currentList.filter(item => {
                const lc = item.state.toLowerCase();
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
                <h3 className="heading">Cases <span style={{ color: "#282c84" }}> in India </span> </h3>
                <i class="fa fa-user icon"></i>
                <input name="search" className="search-input" onChange={this.onChangeHandler} />
                {
                    this.state.filter_data.map((indiData, key) => {
                        return <div className="country-data" key={key}>
                            <div className="country-name">{indiData.state + " "}
                                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
                                    <div className="country-deaths" style={{ color: "red",width:"180px" }}>Cases : {indiData.confirmed+ (indiData.delta.active!==0?` (+${indiData.delta.active})`:"")}</div>
                                    <div className="country-deaths" style={{ color: "green",width:"150px" }}>Cured : {indiData.recovered+(indiData.delta.recovered!==0?` (+${indiData.delta.recovered})`:"")}</div>
                                    <div className="country-deaths" style={{ color: "#282c84",width:"170px" }}>Deaths : {indiData.deaths+(indiData.delta.deaths   !==0?` (+${indiData.delta.deaths})`:"")}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default StatesData;