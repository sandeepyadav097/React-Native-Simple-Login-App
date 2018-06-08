import React from 'react'
import { Text,  View } from 'react-native'


const Header = (props) => {

    //const { textStyle,viewStyle } =styles ;


    return (
    <View style={ styles.viewStyle} >
    <Text style={ styles.textStyle} >  { props.headerText }  </Text> 
    
    </View>
    );
};


const styles= {
   viewStyle:{
       backgroundColor:'#F8F8F8',
       height: 60,
       paddingTop:20,
       justifyContent:'center',
       alignItems:'center',
       shadowColor:'#000000',
       shadowOffset: { width:0, height:2},
       shadowOpacity:0.2,
       elevation: 5,
       position:'relative'

       
   },
    textStyle:{
        fontSize:20
        
    }

};


export { Header };