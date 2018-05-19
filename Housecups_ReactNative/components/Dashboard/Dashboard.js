import React, { Component } from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "react-native-elements";

const completelist = [
  {
    name: "Create School",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Manage Houses",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Manage Schools",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Manage Teachers",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "User Settings",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
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
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={i}
            title={l.name}
          />
        ))}
      </List>
    );
  }
}

export default Dashboard;
