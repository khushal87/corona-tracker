import React, { Component } from 'react';
import './StatesData.css';
import Data from './data';

class StatesData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter_data: []
        }
    }
    componentDidMount() {
        const data = Data;
        this.setState({ data: data, filter_data: data })
    }

    onChangeHandler = (event) => {
        let currentList = [];
        let newList = [];
        if (event.nativeEvent.text !== "") {
            currentList = this.state.data;
            newList = currentList.filter(item => {
                const lc = item.NameOfState.toLowerCase();
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
                        return <div className="country-data">
                            <div className="country-name">{indiData.NameOfState + " "}
                                <div style={{ display: 'flex', flexDirection: "row", marginLeft: "80px", marginRight: "70px" }}>
                                    <div className="country-deaths" style={{ color: "red", margin: "5px" }}>Cases : {indiData.TotalConfirmedCasesIndian}</div>
                                    <div className="country-deaths" style={{ color: "#282c84", margin: "5px" }}>Cured : {indiData.Cured}</div>
                                    <div className="country-deaths" style={{ color: "green", margin: "5px" }}>Deaths : {indiData.Death}</div>
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