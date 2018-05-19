import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Components
import Home from './components/Auth/Home';
// import Dashboard from './components/Dashboard';
import SignIn from './components/Auth/Signin';
import SignUp from './components/Auth/Signup';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
export default createStackNavigator({
  Home: {
    screen: Home
  },
  SignIn: {
   screen: SignIn
 },
 SignUp: {
   screen: SignUp
 },
  // Dashboard: {
  //   screen: Dashboard
  // },
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
