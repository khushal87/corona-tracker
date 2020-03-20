import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
    openHandler = () => {
        this.setState({ toggle: !this.state.toggle });
    }
    render() {
        let className = ""
        if (this.state.toggle) {
            className = "active";
        }
        else {
            className = "lock";
        }
        return (
            <header class="header">
                <div class="header__row">
                    <nav class="header__menu menu">
                        <div class={`menu__icon icon-menu ${this.state.toggle ? className : ""}`} onClick={this.openHandler}>
                            <span></span>
                        </div>
                        <div className={`menu__body ${this.state.toggle ? className : ""}`}>
                            <ul class="menu__list">
                                <li><Link to='/sources' class="menu__link">Sources</Link></li>
                                <li><Link to='/helpline' class="menu__link">Helpline</Link></li>
                                <li><Link to='/' class="menu__link">Home</Link></li>
                                <li><Link to='/about' class="menu__link">About Us</Link></li>

                            </ul>
                        </div>
                    </nav>
                    <div class="header__logo">
                        <h1 className="logoName">Covid-19</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;