import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Reducers from './reducers';

import App from './App';
import './index.css';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import forgotpassword from './components/Auth/forgotpassword';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={ReduxStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgotPassword" component={forgotpassword} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
