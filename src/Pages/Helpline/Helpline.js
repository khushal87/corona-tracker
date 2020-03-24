import React, { Component } from 'react';
import './Helpline.css';
import Navbar from '../../Components/Navbar/Navbar';

class Helpline extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="helpline">
                <Navbar />
                <header className="App-header">
                    <div className="main">
                        <h2 className="heading" style={{ margin: "0px" }}>Helpline</h2>
                        <h5 className="content">To prevent the spread of the pandemic, <a href="https://www.mohfw.gov.in/" className="link">Ministry of Health & Family Welfare</a> had provided this helpline numbers.</h5>
                    </div>
                </header>
                <div className="main-contact">
                    <h4>National Contact Number</h4>
                    <a href="tel:1075">1075</a> | <a href="tel:1800112545">1800-112-545</a>
                    <h4>Central Helpline Number</h4>
                    <a href="tel:+911123978043">+91-11-23978043</a> | <a href="tel:+911123978046">+91-11-23978046</a>
                    <h4>Central Helpline Email</h4>
                    <a href="mailto:ncov2019@gov.in">ncov2019@gov.in</a>
                </div>
                <h3>Helpline number for different <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">States and Union Territories</a></h3>
                <div style={{ margin: "40px" }}>
                    <h2>States</h2>
                    <table style={{ padding: "20px", borderCollapse: "collapse" }} class="table table-striped"><thead><tr><th style={{ textAlign: "center" }}>Sr.No</th><th style={{ textAlign: "center" }}>State</th><th style={{ textAlign: "center" }}>Helpline Number</th></tr></thead><tbody><tr><td>1</td><td>Andhra Pradesh</td><td><a target="_blank" href="tel:0866-2410978">0866-2410978</a></td></tr><tr><td>2</td><td>Arunachal Pradesh</td><td><a target="_blank" href="tel:9536055743">9536055743</a></td></tr><tr><td>3</td><td>Assam</td><td><a target="_blank" href="tel:6913347770">6913347770</a></td></tr><tr><td>4</td><td>Bihar</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>5</td><td>Chhattisgarh</td><td><a target="_blank" href="tel:077122-35091">077122-35091</a></td></tr><tr><td>6</td><td>Goa</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>7</td><td>Gujarat</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>8</td><td>Haryana</td><td><a target="_blank" href="tel:8558893911">8558893911</a></td></tr><tr><td>9</td><td>Himachal Pradesh</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>10</td><td>Jharkhand</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>11</td><td>Karnataka</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>12</td><td>Kerala</td><td><a target="_blank" href="tel:0471-2552056">0471-2552056</a></td></tr><tr><td>13</td><td>Madhya Pradesh</td><td><a target="_blank" href="tel:0755-2527177">0755-2527177</a></td></tr><tr><td>14</td><td>Maharashtra</td><td><a target="_blank" href="tel:020-26127394">020-26127394</a></td></tr><tr><td>15</td><td>Manipur</td><td><a target="_blank" href="tel:3852411668">3852411668</a></td></tr><tr><td>16</td><td>Meghalaya</td><td><a target="_blank" href="tel:9366090748">9366090748</a></td></tr><tr><td>17</td><td>Mizoram</td><td><a target="_blank" href="tel:102">102</a></td></tr><tr><td>18</td><td>Nagaland</td><td><a target="_blank" href="tel:7005539653">7005539653</a></td></tr><tr><td>19</td><td>Odisha</td><td><a target="_blank" href="tel:9439994859">9439994859</a></td></tr><tr><td>20</td><td>Punjab</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>21</td><td>Rajasthan</td><td><a target="_blank" href="tel:0141-2225624">0141-2225624</a></td></tr><tr><td>22</td><td>Sikkim</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>23</td><td>Tamil Nadu</td><td><a target="_blank" href="tel:044-29510500">044-29510500</a></td></tr><tr><td>24</td><td>Telangana</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>25</td><td>Tripura</td><td><a target="_blank" href="tel:0381-2315879">0381-2315879</a></td></tr><tr><td>26</td><td>Uttarakhand</td><td><a target="_blank" href="tel:104">104</a></td></tr><tr><td>27</td><td>Uttar Pradesh</td><td><a target="_blank" href="tel:18001805145">18001805145</a></td></tr><tr><td>28</td><td>West Bengal</td><td><a target="_blank" href="tel:1800313444222">1800313444222</a> / <a target="_blank" href="tel:3323412600">3323412600</a></td></tr></tbody></table>
                    <h2>Union Teritorries</h2>
                    <table style={{ padding: "20px", borderCollapse: "collapse" }} class="table table-striped">
                        <thead>
                            <tr><th style={{ textAlign: "center" }}>Sr.No</th><th style={{ textAlign: "center" }}>Union Territories</th><th style={{ textAlign: "center" }}>Helpline Number</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>   <td>1</td><td>Andaman and NicobarIslands</td><td><a rel="noopener noreferrer" target="_blank" href="tel:03192232102">03192-232102</a></td></tr>
                            <tr>   <td>2</td><td>Chandigarh</td><td><a rel="noopener noreferrer" target="_blank" href="tel:9779558282">9779558282</a></td></tr>
                            <tr>   <td>3</td><td>Dadra and Nagar Haveli and Daman & Diu</td><td><a rel="noopener noreferrer" target="_blank" href="tel:104">104</a></td></tr>
                            <tr>   <td>4</td><td>Delhi</td><td><a target="_blank" rel="noopener noreferrer" href="tel:01122307145">011-22307145</a></td></tr>
                            <tr>   <td>5</td><td>Jammu & Kashmir</td><td><a rel="noopener noreferrer" target="_blank" href="tel:01912520982">01912520982</a> / <a target="_blank" href="tel:01942440283">0194-2440283</a></td></tr>
                            <tr>   <td>6</td><td>Ladakh</td><td><a rel="noopener noreferrer" target="_blank" href="tel:01982256462">01982256462</a></td></tr>
                            <tr>   <td>7</td><td>Lakshadweep</td><td><a rel="noopener noreferrer" target="_blank" href="tel:104">104</a></td></tr>
                            <tr>   <td>7</td><td>Puducherry</td><td><a rel="noopener noreferrer" target="_blank" href="tel:104">104</a></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Helpline;