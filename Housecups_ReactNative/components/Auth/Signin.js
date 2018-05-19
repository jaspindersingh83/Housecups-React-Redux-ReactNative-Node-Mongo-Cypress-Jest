import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../actions";
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
  signupsuccess
} from "./Authstyles";

//Change ApiUrl in Production
const clientUrl = "http://localhost:3000";

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: null,
      renderedAfterSignUp: false
    };
  }

  async componentWillReceiveProps(props) {
    if (props.signedUpusername && !this.state.renderedAfterSignUp) {
      await this.setState({
        username: props.signedUpusername,
        email: props.signedUpusername,
        password: "",
        error: undefined,
        renderedAfterSignUp: true
      });
    } else {
      await this.setState({
        password: "",
        error: props.error
      });
    }
  }

  handleInput = async (text, type) => {
    if (type === "username") {
      await this.setState({
        username: text,
        email: text
      });
    } else {
      await this.setState({
        [type]: text
      });
    }
  };
  signin = async () => {
    this.props.signin(this.state, this.props.navigation);
  };
  render() {
    return (
      <View style={body}>
        <Text style={h1}>Sign In</Text>
        <View style={formwrapper}>
          {this.state.renderedAfterSignUp ? (
            <View>
              <Text style={signupsuccess}>
                {" "}
                Sign Up Successful, Sign In now
              </Text>
            </View>
          ) : null}
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Username or Email
          </FormLabel>
          <FormInput
            value={this.state.username}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "username")}
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
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <TouchableOpacity
            style={hyperlink}
            onPress={() => {
              Linking.openURL(`${clientUrl}/forgotPassword`);
            }}
          >
            <Text style={hyperlinkText}>Forgot Username or Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signinButton} onPress={() => this.signin()}>
            <Text style={buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    signedUpusername: state.auth.signedUpusername,
    teacherSignup: state.auth.teacherSignup
  };
};
export default connect(mapStateToProps, { signin })(SignIn);
