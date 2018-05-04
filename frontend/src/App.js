/* eslint-disable */
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
// Routers
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import reducers from './reducers';
// Common Components
import Header from './components/Header/Header';
// School Admin view
import Schooladmin from './components/Schooladmin/Schooladmin'
// Views for Authentication
import Forgotpassword from './components/Auth/Forgotpassword';
import Resetpassword from './components/Auth/Reset';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Settings from './components/Auth/Settings';
// General View Pages
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(
  createStore
);

class App extends Component {
  render() {
    return (
      <Provider
        store={createStoreWithMiddleware(
          reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <Router>
          <div className="App">
            <Header />
            {/* Please import componenets in alphabetical order */}
            <Route exact path="/" component={Landing} />
            <Route path="/forgotpassword" component={Forgotpassword} />
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/reset" component={Resetpassword} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/schooladmin" component={Schooladmin} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
