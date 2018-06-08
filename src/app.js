import React from 'react'
import {View, Text} from 'react-native'
// import firebase from 'firebase'
// addding import is causing error used require instead in the component will mount
import { Header } from './components/common'
import Login from './components/Login'

class App extends React.Component{

    initializeFirebase() {
        const firebase = require("firebase");
        firebase.initializeApp({
            apiKey: "AIzaSyDMTCRHOKXu-RPmA3XSPwjr0vc7-rT9sX0",
            authDomain: "authentication-e3894.firebaseapp.com",
            databaseURL: "https://authentication-e3894.firebaseio.com",
            projectId: "authentication-e3894",
            storageBucket: "authentication-e3894.appspot.com",
            messagingSenderId: "128887161348"
        });
      
       
      }
      
      componentWillMount() {
        this.initializeFirebase();
   
      }

render(){
return (
    <View> 
    <Header headerText="Login Here"/>
<Login/>
</View>
);
}
}

export default App;