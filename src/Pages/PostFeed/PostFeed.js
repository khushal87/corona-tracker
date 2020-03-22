import React, { Component } from 'react';
import Axios from 'axios';

class PostFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }


    inputChangeHandler = (e) => {
        this.setState({ data: e.target.value });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.post('https://covid19-repo.herokuapp.com/data', {
            data: this.state.data
        }, {
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
            },
            withCredentials: false,
            credentials: 'same-origin'
        }).then((res) => {
            if (res.status === 200) {
                this.setState({ data: "" });
                alert("Posted");
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="form">
                <form method="post" onSubmit={this.onSubmitHandler} style={{ marginTop: "20px" }}>
                    <input name="data" value={this.state.data} onChange={this.inputChangeHandler} />
                    <button className="btn primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostFeed;