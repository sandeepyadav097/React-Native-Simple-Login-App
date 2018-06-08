import React, { Component} from 'react'
import {View ,Text}  from 'react-native'
import { Header, Button , Card, CardItem } from './common'

class Login extends Component{

    render(){

        return(

          
            <Card>
                <CardItem/>
                <CardItem/>
                <CardItem>

                      <Button>
                          Log In 
                          </Button>
                 </CardItem>   

            </Card>
           
        );
    }



} 

export default Login;