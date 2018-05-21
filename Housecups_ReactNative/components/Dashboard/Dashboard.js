import React, { Component } from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "react-native-elements";

const completelist = [
  {
    name: "Create School",
  },
  {
    name: "Manage Houses",
  },
  {
    name: "Manage Schools",  
  },
  {
    name: "Manage Teachers",
  },
  {
    name: "User Settings",
  }
];

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      listToDisplay: []
    };
  }
  // async componentWillMount() {}
  handlePress = async (type) => {
    if(type === 'Create School'){
      this.props.navigation.navigate('CreateSchool');
    }
    if(type === 'Manage Houses'){
      this.props.navigation.navigate('Houses');
    }
    if(type === 'Manage Schools'){
      
    }
    if(type === 'Manage Teachers'){
      this.props.navigation.navigate('Teachers');
    }
    if(type === 'User Settings'){
      this.props.navigation.navigate('Settings')
    }
  }
  render() {
    return (
      <List containerStyle={{ marginBottom: 20 }}>
        {completelist.map((l, i) => (
          <ListItem
            onPress={() => this.handlePress(l.name)}
            key={i}
            title={l.name}
          />
        ))}
      </List>
    );
  }
}

export default Dashboard;
