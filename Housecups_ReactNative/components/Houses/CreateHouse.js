import React, { Component } from "react";
import Popover from "react-native-popover-view";
import { connect } from "react-redux";
import { addHouse } from "../../actions";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, FormLabel, FormInput } from "react-native-elements";
import { ColorPicker, fromHsv } from "react-native-color-picker";

import {
  createHouseButton,
  buttonText,
  body,
  formwrapper,
  h1,
  addedHousesuccess
} from "./HouseStyles";

class CreateHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: "#F17013",
      newHouseName: "",
      newHouseMascot: ""
    };
  }

  showPopover = async () => {
    await this.setState({ displayColorPicker: true });
  };

  closePopover = async () => {
    await this.setState({ displayColorPicker: false });
  };

  handleInput = async (text, type) => {
    await this.setState({
      [type]: text
    });
  };

  onColorChange = async color => {
    color = fromHsv(color);
    await this.setState({ color });
  };

  addHouse = async () => {
    const house = {
      name: this.state.newHouseName,
      color: this.state.color,
      mascot: this.state.newHouseMascot
    };
    await this.props.addHouse(house, this.props.navigation);
    this.props.navigation.navigate("Houses");
  };

  render() {
    return (
      <View style={body}>
        <Text style={h1}>Add House</Text>
        <View style={formwrapper}>
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            New House Name
          </FormLabel>
          <FormInput
            value={this.state.newHouseName}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "newHouseName")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Mascot
          </FormLabel>
          <FormInput
            value={this.state.newHouseMascot}
            textInputRef="password"
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "newHouseMascot")}
          />
          <TouchableOpacity
            style={{
              backgroundColor: this.state.color,
              flex: 0,
              width: "50%",
              height: 50,
              marginTop: 25,
              borderRadius: 20
            }}
            onPress={() => this.showPopover()}
          />
          <Popover
            isVisible={this.state.displayColorPicker}
            fromView={this.touchable}
            onClose={() => this.closePopover()}
          >
            {" "}
            <View
              style={{
                flex: 1,
                height: 500,
                width: "100%",
                padding: 15,
                backgroundColor: "#212021"
              }}
            >
              <Text style={{ color: "white" }}>
                Use sliders or dots to pick colors
              </Text>
              <ColorPicker
                oldColor="purple"
                color={this.state.color}
                onColorChange={this.onColorChange}
                onColorSelected={color => alert(`Color selected: ${color}`)}
                onOldColorSelected={color =>
                  alert(`Old color selected: ${color}`)
                }
                style={{ flex: 1 }}
              />
            </View>
          </Popover>
          <TouchableOpacity
            style={createHouseButton}
            onPress={() => this.addHouse()}
          >
            <Text style={buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

export default connect(mapStateToProps, { addHouse })(CreateHouse);
