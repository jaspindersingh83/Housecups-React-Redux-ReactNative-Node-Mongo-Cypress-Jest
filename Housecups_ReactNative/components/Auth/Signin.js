import axios from 'axios';
import React, {Component} from 'react';
import {View, StyleSheet, Text,  TouchableOpacity, AsyncStorage, Linking} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'; 

import {signinButton, buttonText,body, formwrapper, hyperlinkText, hyperlink, signupsuccess} from './Authstyles';

//Change ApiUrl in Production
const apiUrl = 'http://localhost:5000';
const clientUrl = 'http://localhost:3000';

class SignIn extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            error: null,
            comingAfterSignup:false
        }
    }
    async componentDidMount(){
        let username = await AsyncStorage.getItem('username')
        if(username){
            await this.setState({
                username,
                comingAfterSignup:true,
            })
        }
    }
    handleInput = async (text, type) => {
        text = text.toLowerCase();
        if (type === 'username'){
            await this.setState({
                username :text,
                email: text
            }) 
        } else {
            await this.setState({
                [type]:text
            })
        }
    }
    signIn = async () =>{
        const user = this.state;
        try{
            let loginRequest = await axios.post(`${apiUrl}/signin`, user);
            let token = loginRequest.data.token
            await AsyncStorage.setItem('token',token);
            await AsyncStorage.removeItem('username');
            this.props.navigation.navigate('Home')
        } catch (error){
            let errorMessage = error.response.data.message;
            this.setState({
                error:errorMessage
            });
            setTimeout(() => {
                this.setState({error: null});
            }, 4000);
        }
        this.setState({
            password:'',
            comingAfterSignup:false
        });
    }
    render(){
        return(
            <View style={body}>
                <View style={formwrapper}>
                {this.state.comingAfterSignup ? 
                <View>
                    <Text style={signupsuccess}> Sign Up Successful, Sign In now</Text>
                </View> :
                null
                }
                    <FormLabel labelStyle={{color:'white',fontSize:18}} >Username or Email</FormLabel>
                    <FormInput value={this.state.username} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'username')}/>
                    <FormLabel labelStyle={{color:'white',fontSize:18}}>Password</FormLabel>
                    <FormInput value={this.state.password} textInputRef='password'  secureTextEntry={true} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'password')}/>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                    <TouchableOpacity style={hyperlink} onPress={() => { Linking.openURL(`${clientUrl}/forgotPassword`)}}>
                        <Text style={hyperlinkText}>Forgot Username or Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signinButton} onPress={() => this.signIn()}>
                        <Text style={buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignIn;