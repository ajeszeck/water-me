import React, { Component } from 'react';
import '../App.css';
import base from '../base.js';
import Plant from './Plant.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import SignInPage from './SignInPage.js';
import SignUpPage from './SignUpPage.js';
import Account from './Account.js';
import Home from './Home.js';

import * as routes from '../constants/routes.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addPlant = this.addPlant.bind(this);
    this.state = {
      plants: []
    }
  }

  componentDidMount() {
    this.ref = base.syncState(`plants`, {
      context: this,
      state: 'plants'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addPlant() {
    const plants = {...this.state.plants}
    const newPlant = {name: "newPlant"};
    plants[`plant${Date.now()}`] = newPlant;
    this.setState({ plants });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Water Me</h1>
        </header>
        <Router>
          <div>
            <Navigation />
            <hr/>
            <Route path={routes.SIGN_IN} component={() => <SignInPage />} />
            <Route path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route path={routes.ACCOUNT} component={() => <Account />} />
            <Route path={routes.HOME} component={() => <Home />} />
          </div>
        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addPlant}>Click Me</button>
      </div>
    );
  }
}

export default App;
