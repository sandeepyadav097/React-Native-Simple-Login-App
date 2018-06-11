import React from 'react'
import {Text, TouchableOpacity, TouchableHighlight} from 'react-native'
const Button = ( props ) =>{

    return (
        <TouchableOpacity onPress={ props.onPress } 
        
        style={styles.buttonStyles}>
            <Text style={styles.textStyle}>
           { props.children }
            </Text>
        </TouchableOpacity>

    );

};
const styles={
    textStyle:{
        alignSelf:'center',
       color:'#007aff',
        fontWeight:'600',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10
    },

    buttonStyles:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        //padding:10,
        marginRight:5
    }
}

// export default Button;
export { Button };