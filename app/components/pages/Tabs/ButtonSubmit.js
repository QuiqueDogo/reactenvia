import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet, Text } from 'react-native';

export default class ButtonSubmit extends Component {
    render(){
        return(
          <TouchableOpacity style={styleSession.submit}>
              <Text style={styleSession.text}>Inicia Sesion</Text>
          </TouchableOpacity> 
        )
    }
}

const styleSession = StyleSheet.create({
    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:17,
        paddingBottom:17,
        backgroundColor:'#02b2bc',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
      },
    text:{
        color:"white",
        textAlign:"center",
    }
})