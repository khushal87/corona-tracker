import React, { Component } from 'react';
import './Sources.css';
import Navbar from '../../Components/Navbar/Navbar';

class Sources extends Component {
    render() {
        return (
            <div className="sourcesPage">
                <Navbar />
                <header className="App-header">
                    <div className="main">
                        <h2 className="heading" style={{ margin: "0px" }}>Sources</h2>
                        <h5 className="content">For every News on Updates and Guidelines on Covid-19 we have created this.</h5>
                    </div>
                </header>
                <div className="main-content">
                    <h3>News and Updates</h3>
                    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                        <table style={{ padding: "20px", borderCollapse: "collapse" }} class="table table-striped">
                            <thead>
                                <tr><th style={{ textAlign: "center" }}>S. No.</th><th style={{ textAlign: "center" }}>Sources</th><th style={{ textAlign: "center" }}>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>Ministry of Health and Family Welfare Government of India</td><td><a target="_blank" href="https://www.mohfw.gov.in/">Link</a></td></tr>
                                <tr><td>2</td><td>Firstpost</td><td><a target="_blank" href="https://www.firstpost.com/tag/coronavirus">Link</a></td></tr>
                                <tr><td>3</td><td>Economic Times</td><td><a target="_blank" href="https://economictimes.indiatimes.com/coronavirus">Link</a></td></tr>
                                <tr><td>4</td><td>The hindu</td><td><a target="_blank" href="https://www.thehindu.com/topic/coronavirus/">Link</a></td></tr>
                                <tr><td>5</td><td>The Guardian</td><td><a target="_blank" href="https://www.theguardian.com/world/2020/mar/20/coronavirus-the-week-the-world-shut-down">Link</a></td></tr>
                                <tr><td>6</td><td>NDTV News</td><td><a target="_blank" href="https://khabar.ndtv.com/">Link</a></td></tr>
                                <tr><td>7</td><td>Real time feed by Channel New Asia with Map</td><td><a target="https://infographics.channelnewsasia.com/covid-19/map.html" href="tel:104">Link</a></td></tr>
                                <tr><td>8</td><td>Twitter Hashtags</td><td><a target="https://twitter.com/explore" href="tel:104">Link</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>Guidelines</h3>
                    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                        <table style={{ padding: "20px", borderCollapse: "collapse" }} class="table table-striped">
                            <thead>
                                <tr><th style={{ textAlign: "center" }}>S. No.</th><th style={{ textAlign: "center" }}>Sources</th><th style={{ textAlign: "center" }}>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>FAQS</td><td><a target="_blank" href="https://www.mohfw.gov.in/pdf/FAQ.pdf">Link</a></td></tr>
                                <tr><td>2</td><td>Guidelines on Social Distancing</td><td><a target="_blank" href="https://www.mohfw.gov.in/pdf/SocialDistancingAdvisorybyMOHFW.pdf">Link</a></td></tr>
                                <tr><td>3</td><td>Advisory for Hospitals and Medical Education Institutions</td><td><a target="_blank" href="https://www.mohfw.gov.in/pdf/AdvisoryforHospitalsandMedicalInstitutions.pdf">Link</a></td></tr>
                                <tr><td>4</td><td>Guidelines on Dead Body Management</td><td><a target="_blank" href="https://www.mohfw.gov.in/pdf/1584423700568_COVID19GuidelinesonDeadbodymanagement.pdf">Link</a></td></tr>
                                <tr><td>5</td><td>More Guidelines and Reports at</td><td><a target="_blank" href="https://www.mohfw.gov.in/">Link</a></td></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sources;