import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeSettings } from '../../actions';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import {
  signinButton,
  buttonText,
  body,
  formwrapper,
  h1,
  hyperlinkText,
  hyperlink,
  signupsuccess,
} from "./Authstyles";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: undefined,
      settingsChanged: false,
    };
  }
  async componentWillReceiveProps(props) {
    await this.setState({
      error: props.error,
      settingsChanged: props.settingsChanged,
    });
  }

  handleInput = async (text, type) => {
    await this.setState({
      [type]: text,
    });
  };
  changeSettings = async () => {
    await this.props.changeSettings(this.state, this.props.navigation);
    await this.setState({
      email: '',
      password: '',
      confirmPassword: '',
      error: this.props.error,
      settingsChanged: this.props.changedSettings,
    });
  };
  render() {
    return (
      <View style={body}>
        <Text style={h1}>Change Settings</Text>
        <View style={formwrapper}>
          {this.state.settingsChanged ? (
            <View>
              <Text style={signupsuccess}>
                {" "}
                Settings have been changed successfully.
              </Text>
            </View>
          ) : null}
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Email
          </FormLabel>
          <FormInput
            value={this.state.email}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "email")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Password
          </FormLabel>
          <FormInput
            value={this.state.password}
            textInputRef="password"
            secureTextEntry={true}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "password")}
          />
           <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
           Confirm Password
          </FormLabel>
          <FormInput
            value={this.state.confirmPassword}
            textInputRef="password"
            secureTextEntry={true}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "confirmPassword")}
          />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <TouchableOpacity style={signinButton} onPress={() => this.changeSettings()}>
            <Text style={buttonText}>Change Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    changedSettings: state.auth.changedSettings,
  };
};
export default connect(mapStateToProps, { changeSettings })(Settings);