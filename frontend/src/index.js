import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Reducers from './reducers';

import './index.css';
// Common Components
import Header from './components/Header/Header';
// Views for Authentication
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import forgotpassword from './components/Auth/forgotpassword';
// General View Pages
import Landing from './components/Landing/Landing';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={ReduxStore}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotPassword" component={forgotpassword} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
