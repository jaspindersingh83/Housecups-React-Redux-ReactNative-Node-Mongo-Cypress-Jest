import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { List, ListItem } from "react-native-elements";
import { getUserRoles, getHousesBySchool } from "../../actions";
import {
  addHouseButton,
  buttonText,
} from "./HouseStyles";

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }
  async componentWillReceiveProps(props) {
    const { isSuperAdmin, isSchoolAdmin, isTeacher } = props.auth;
    await this.setState({
      houses: [...props.houses]
    });
  }
  addHouseNavigate = async () => {
    this.props.navigation.navigate('CreateHouse')
  }
  render() {
    return (
      <Scrollview>
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.houses.map(house => (
            <ListItem
              onPress={() => this.handlePress(l.name)}
              key={house._id}
              title={house.name}
              subtitle={house.mascot}
            />
          ))}
        </List>
        <TouchableOpacity style={addHouseButton} onPress={() => this.addHouseNavigate()}>
          <Text style={buttonText}>Add House</Text>
        </TouchableOpacity>
      </Scrollview>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getHousesBySchool })(Houses)
