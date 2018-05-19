import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

// Components
import Home from "./components/Auth/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Auth/Settings";
import SignIn from "./components/Auth/Signin";
import SignUp from "./components/Auth/Signup";

import Houses from './components/Houses/Houses';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(
  createStore
);

// Create a Navigator to be wrapped around each component
export const Navigator = new createStackNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  },
  Houses: {
    screen: Houses
  },
  Settings: {
    screen: Settings
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
