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
import forgotpassword from './components/Auth/forgotpassword';
import reset from './components/Auth/reset';
// General View Pages
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicAuthRoute from './components/PublicAuthRoute/PublicAuthRoute';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxPromise));

class App extends Component {
  render() {
    return (
      <Provider store={ReduxStore}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/pricing" component={Pricing} />
              
              <PublicAuthRoute exact path="/signin" component={Signin} />
              <PublicAuthRoute exact path="/signup" component={Signup} />
              <PublicAuthRoute exact path="/forgotPassword" component={forgotpassword} />

              <PrivateRoute exact path="/reset" component={reset} />              
              <PrivateRoute exact path="/(dashboard|schools|houses|scoreboard|settings)" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
