import React, { Component} from 'react'
import {Text} from 'react-native'
import { Header, Button , Card, CardItem , Input, Spinner} from './common'

class Login extends Component{

    state= { email:'', password:'', error:'', loading:false}; 
    
    onButtonPress(){
     
        const firebase = require("firebase");
        const {email, password}=this.state;
        this.setState({error:'', loading:true});
      
        firebase.auth().signInWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
        .catch( ()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(
                    this.onLoginFail.bind(this)
                 ) 
        })

    }

    onLoginFail(){
       this.setState({error:'Authentication Fail', loading:false});
    }
    onLoginSuccess(){

        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        })

    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={ this.onButtonPress.bind(this) }>
                          Log In 
                        </Button>
        );
    };

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

                    {this.renderButton()}
                    
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