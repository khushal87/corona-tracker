import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from './Pages/HomePage/Homepage';
import Helpline from './Pages/Helpline/Helpline';
import Sources from './Pages/Sources/Sources';
import AboutUs from './Pages/About/AboutUs';
import ReactGA from 'react-ga';

class App extends Component {
  initializeAnalytics = () => {
    ReactGA.initialize('UA-161398736-1');
    ReactGA.pageview('/');
  }
  render() {
    this.initializeAnalytics();
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/sources' component={Sources} />
            <Route path='/helpline' component={Helpline} />
            <Route path='/about' component={AboutUs} />
            <Redirect to='/404' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
