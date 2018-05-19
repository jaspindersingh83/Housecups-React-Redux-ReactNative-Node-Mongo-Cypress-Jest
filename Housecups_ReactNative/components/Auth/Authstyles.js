import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonswrapper:{
      flex:0,
      width:'80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  button: {
      flex:0,
      width: '45%',
      height:50,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
  },
  signinButton: {
    flex:0,
    width: '100%',
    height:50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 10,
  },
  buttonText :{
      color:'black',
      fontSize:18
  },
  h1:{
      flex:0,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:28,
      color: 'white',
      marginBottom:25,
  },
  h2:{
      flex:0,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:18,
      color: 'white',
      marginBottom:25,
      marginLeft: 10,
      marginRight: 10,
  },
  formwrapper:{
    flex:0,
    width: '70%',
  },
  body:{
      flex: 1,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'rgba(71,53,193,1)', 
  },
  hyperlink: {
      flex:0,
      width: '100%',
      height:50,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 25
  },
  hyperlinkText :{
      color:'#0080ff',
      fontSize:18
  },
  signupsuccess:{
      fontSize:18,
      color:'#e50914',
  },  
});

export const {button, buttonText, h1, h2, hyperlink, hyperlinkText, body, formwrapper, buttonswrapper, signinButton, signupsuccess} = styles