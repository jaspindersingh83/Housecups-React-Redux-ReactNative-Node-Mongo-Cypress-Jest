import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Alert,
  View,
  Scrollview,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

// Style imports 3rd party
import { List, ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

import { getHousesBySchool, deleteHouse } from "../../actions";
import { addHouseButton, buttonText, h1 } from "./HouseStyles";

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.navigation);
  }
  async componentWillReceiveProps(props) {
    await this.setState({
      houses: [...props.houses],
      activeRowKey: null
    });
  }
  addHouseNavigate = () => {
    this.props.navigation.navigate("CreateHouse");
  };
  render() {
    const swipeSettings = {
      autoClose: true,
      right: [
        {
          onPress: async () => {
            const deletingRow = this.state.activeRowKey;
            // Below for without alert Delete if using Alert
            await this.props.deleteHouse(deletingRow)
            // Alert.alert(
            //   "Alert",
            //   "Are you sure you want to delete ?",
            //   [
            //     {
            //       text: "No",
            //       onPress: () => console.log("Cancel Pressed"),
            //       style: "cancel"
            //     },
            //     {
            //       text: "Yes",
            //       onPress: async () => {
            //         await this.props.deleteHouse(deletingRow)
            //       }
            //     }
            //   ],
            //   { cancelable: true }
            // );
          },
          text: "Delete",
          type: "delete"
        }
      ],
    };
    return (
      <View>
        <Text style={h1} />
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.houses.map(house => (
            <Swipeout 
              key = {house._id}
              {...swipeSettings}
              onClose = {async () => {
                await this.setState({ activeRowKey: null })
              }}
              onOpen = {async () => {
                await this.setState({ activeRowKey: house._id });
              }}>
              <ListItem
                onPress={() => this.handlePress(l.name)}
                avatar={{}}
                avatarOverlayContainerStyle={{ backgroundColor: house.color }}
                title={house.name}
                subtitle={house.mascot}
                hideChevron
              />
            </Swipeout>
          ))}
        </List>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={addHouseButton}
            onPress={() => this.addHouseNavigate()}
          >
            <Text style={buttonText}>Add House</Text>
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

export default connect(mapStateToProps, { deleteHouse, getHousesBySchool })(
  Houses
);
