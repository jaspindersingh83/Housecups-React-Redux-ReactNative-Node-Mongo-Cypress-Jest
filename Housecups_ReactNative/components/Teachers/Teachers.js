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

import { getTeachers, deleteTeacher } from "../../actions";
import { addHouseButton, buttonText, h1 } from "../../components/Houses/HouseStyles";

class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }
  async componentWillMount() {
    await this.props.getTeachers(this.props.navigation);
  }
  async componentWillReceiveProps(props) {
    await this.setState({
      teachers: [...props.teachers],
      activeRowKey: null
    });
  }
  addTeacherNavigate = () => {
    this.props.navigation.navigate("AddTeacher");
  };
  render() {
    const swipeSettings = {
      autoClose: true,
      right: [
        {
          onPress: async () => {
            const deletingRow = this.state.activeRowKey;
            // Below for without alert Delete if using Alert
            await this.props.deleteTeacher(deletingRow);
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
            //         await this.props.deleteTeacher(deletingRow)
            //       }
            //     }
            //   ],
            //   { cancelable: true }
            // );
          },
          text: "Delete",
          type: "delete"
        }
      ]
    };
    return (
      <View>
        <Text style={h1} />
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.teachers.map(teacher => (
            <Swipeout
              key={teacher._id}
              {...swipeSettings}
              onClose={async () => {
                await this.setState({ activeRowKey: null });
              }}
              onOpen={async () => {
                await this.setState({ activeRowKey: teacher._id });
                console.log(this.state.activeRowKey)
              }}
            >
              <ListItem
                leftIcon={{ name: 'person' }}
                title={teacher.firstName +" "+ teacher.lastName}
                subtitle={teacher.email}
                hideChevron
              />
            </Swipeout>
          ))}
        </List>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={addHouseButton}
            onPress={() => this.addTeacherNavigate()}
          >
            <Text style={buttonText}>Add Teachers</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    teachers: state.teachers
  };
};

export default connect(mapStateToProps, { getTeachers, deleteTeacher })(
  Teachers
);
