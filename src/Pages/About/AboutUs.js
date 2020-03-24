import React, { Component } from 'react';
import './AboutUs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Image from '../../assets/index.jfif';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <Navbar />
                <header className="App-header">
                    <div className="main">
                        <h2 className="heading" style={{ margin: "0px" }}>About Us</h2>
                        <h5 className="content">We are with you at your distress.</h5>
                    </div>
                </header>
                <div className="main-content" >
                    <h4>Covid-19 is causing a devastating change in humankind and also in the global economy.
                    <p>In the world full of rumours we aim to provide you with all the updates you need for fighting this outbreak.</p>
                        <p>Please do reach us if you have any query at this <a href="mailto:hrithik.agarwal87@gmail.com">email.</a>.</p>
                        <p>Thank you, Hope you help the community by sharing this and nullifying the rumour in the society.</p>
                    Regards,
                    <a href="https://www.linkedin.com/in/khushal-agarwal-547370166/">Khushal Agarwal</a>
                    </h4>
                    <h3>This app is crafted by </h3>
                    <img src={Image} style={{ borderRadius: "50px", height: "200px", width: "200px", marginBottom: "20px" }} alt="about" />
                </div>
            </div>
        )
    }
}

export default AboutUs;