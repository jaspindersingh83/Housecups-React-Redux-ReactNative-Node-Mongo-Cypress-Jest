import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const completelist = [
  {
    name: 'Create School',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Manage Houses',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Manage Schools',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Manage Teachers',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'User Settings',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
]

class Dashboard extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
      super(props);
      this.state = {
          listToDisplay:[]
      }
    }
    async componentWillMount() {
      
    }
    render(){
        return(
            <View style={body}>
                  
            </View>
        )
    }
}



const styles = StyleSheet.create({
    body:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#f5f5f5',   
    }
  });

const {body} = styles




export default Dashboard;