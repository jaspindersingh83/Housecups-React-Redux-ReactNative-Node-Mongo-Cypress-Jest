// /* eslint-disable */
import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
// Routers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import reducers from './reducers';
// Common Components
import Header from './components/Header/Header';
// Views for Authentication
import Forgotpassword from './components/Auth/Forgotpassword';
import Resetpassword from './components/Auth/Reset';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
// General View Pages
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicAuthRoute from './components/PublicAuthRoute/PublicAuthRoute';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

class App extends Component {
  state={}
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
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/pricing" component={Pricing} />
              {/* Reset uses a validation JWT and after processing the user needs to signin  */}
              {/* again to reset the JWT. So please keep don't make signin as PublicAuth Route */}
              <Route exact path="/signin" component={Signin} />
              <PublicAuthRoute exact path="/signup" component={Signup} />
              <PublicAuthRoute exact path="/forgotPassword" component={Forgotpassword} />
              <PublicAuthRoute path="/reset" component={Resetpassword} />
              <Route exact path="/schooladmin" component={Schooladmin} />
              <PrivateRoute
                exact
                path="/(dashboard|schools|scoreboard|settings)"
                component={Dashboard}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
