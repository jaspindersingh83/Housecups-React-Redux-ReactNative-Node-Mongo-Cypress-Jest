import React, { Component } from "react";
import Popover from "react-native-popover-view";
import { connect } from "react-redux";
import { addTeacher } from "../../actions";
import { View, Text, TouchableOpacity } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { ColorPicker, fromHsv } from "react-native-color-picker";

import {
  createHouseButton,
  buttonText,
  body,
  formwrapper,
  h1,
  addedHousesuccess
} from "../Houses/HouseStyles";

class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  handleInput = async (text, type) => {
    await this.setState({
      [type]: text
    });
  };


  addTeacher = async () => {
    teacher=this.state;
    await this.props.addTeacher(teacher, this.props.navigation);
    this.props.navigation.navigate("Teachers");
  };

  render() {
    return (
      <View style={body}>
        <Text style={h1}>Add Teacher</Text>
        <View style={formwrapper}>
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            First Name
          </FormLabel>
          <FormInput
            value={this.state.firstName}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "firstName")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Last Name
          </FormLabel>
          <FormInput
            value={this.state.lastName}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "lastName")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Email
          </FormLabel>
          <FormInput
            value={this.state.email}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "email")}
          />
          <TouchableOpacity
            style={createHouseButton}
            onPress={() => this.addTeacher()}
          >
            <Text style={buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { addTeacher })(AddTeacher);
