import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import { button, buttonText, h1, h2, body, buttonswrapper } from "./Authstyles";

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={body}>
        <Text style={h1}>House Cup</Text>
        <Text style={h2}>
          Encourage students by rewarding them for their good work
        </Text>
        <View style={buttonswrapper}>
          <TouchableOpacity
            style={button}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
