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
// Views SchoolAdmin 
import Schooladmin from './components/SchoolAdmin/SchoolAdmin';
import Createschool from './components/SchoolAdmin/CreateSchool';
// General View Pages
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';
import SchoolAdmin from './components/SchoolAdmin/SchoolAdmin';
import Dashboard from './components/Dashboard/Dashboard';
import PublicScoreboard from './components/Scoreboard/PublicScoreboard';
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
              {/* again to reset the JWT. So don't make signin as PublicAuth Route */}
              <Route exact path="/signin" component={Signin} />
              <PublicAuthRoute exact path="/signup" component={Signup} />
              <PublicAuthRoute exact path="/forgotPassword" component={Forgotpassword} />
              <PublicAuthRoute path="/reset" component={Resetpassword} />
              <Route exact path="/scoreboard/:schoolId" component={PublicScoreboard} />
              <Route exact path="/schooladmin" component={Schooladmin} />
              <Route path="/createschool" component={Createschool} />
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
