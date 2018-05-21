import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

// Auth Components
import Home from "./components/Auth/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Auth/Settings";
import SignIn from "./components/Auth/Signin";
import SignUp from "./components/Auth/Signup";

// Houses Components
import Houses from "./components/Houses/Houses";
import CreateHouse from "./components/Houses/CreateHouse";

// Teachers Components
import Teachers from "./components/Teachers/Teachers";
import AddTeacher from "./components/Teachers/AddTeacher";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxPromise, ReduxThunk))
);

// Create a Navigator to be wrapped around each component
export const Navigator = new createStackNavigator({
  Home: {
    screen: Home,
  },
  CreateHouse: {
    screen: CreateHouse
  },
  AddTeacher: {
    screen: AddTeacher
  },
  Dashboard: {
    screen: Dashboard
  },
  Houses: {
    screen: Houses
  },
  Teachers: {
    screen: Teachers
  },
  Settings: {
    screen: Settings
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
