import React from 'react'
import {View, Text} from 'react-native'
// import firebase from 'firebase'
// addding import is causing error used require instead in the component will mount
import { Header, Button, Spinner } from './components/common'
import Login from './components/Login'

class App extends React.Component{

    state={ loggedIn:false}
   
    // initializeFirebase() {

      
       
    //   }
      
      componentWillMount() {
        const firebase = require("firebase");
       // this.initializeFirebase();
               
       firebase.initializeApp({
        apiKey: "AIzaSyDMTCRHOKXu-RPmA3XSPwjr0vc7-rT9sX0",
        authDomain: "authentication-e3894.firebaseapp.com",
        databaseURL: "https://authentication-e3894.firebaseio.com",
        projectId: "authentication-e3894",
        storageBucket: "authentication-e3894.appspot.com",
        messagingSenderId: "128887161348"
    });
    
        firebase.auth().onAuthStateChanged( (user)=>{
            if(user){
                this.setState({loggedIn:true});
            }
            else{
                this.setState({loggedIn:false});
            }
        });
      }


renderContent(){
    const firebase = require("firebase");
    switch(this.state.loggedIn){
        case true:
            return (
            <Button onPress={ ()=> firebase.auth().signOut()}> Log Out</Button>
        );
        case false:
            return <Login />
        default:
            <Spinner size="large"/>
    }
}      



render(){
return (
    <View> 
    <Header headerText="Login Here"/>
    {this.renderContent()}
</View>
);
}
}


export default App;