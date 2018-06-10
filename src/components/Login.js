import React, { Component} from 'react'
import {Text} from 'react-native'
import { Header, Button , Card, CardItem , Input} from './common'

class Login extends Component{

    state= { email:'', password:'', error:''}; 
    
    onButtonPress(){
        
        const firebase = require("firebase");
        const {email, password}=this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
            .catch( ()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch( ()=>{
                    this.setState({error:'Authentiation Failed'});
                }) 
        })

    }

    render(){

        return(

          
            <Card>
                <CardItem>
                    <Input  label="E-mail" placeholder={'user@example.com'} value={this.state.email} onChangeText={ email => {this.setState({email})}  }      />
                 
                    </CardItem>
                <CardItem>
                    <Input secureTextEntry label="Password"  placeholder={'password'} value={this.state.password} onChangeText={ password => {this.setState({password})}  }      />
                 
                 </CardItem>  

                  <Text style={style.errorStyle} >{this.state.error}
                 </Text>   

                <CardItem>

                

                      <Button onPress={ this.onButtonPress.bind(this) }>
                          Log In 
                          </Button>
                 </CardItem>   

            </Card>
           
        );
    }



} 

const style={
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}



export default Login;