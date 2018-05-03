/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Reducers from './reducers';

import './App.css';
// Common Components
import Header from './components/Header/Header';
// Views for Authentication
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Settings from './components/Auth/Settings';
import forgotpassword from './components/Auth/forgotpassword';
import reset from './components/Auth/reset';
// General View Pages
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxPromise));

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={ReduxStore}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/forgotPassword" component={forgotpassword} />
              <Route exact path="/reset" component={reset} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
