import React from 'react';
import {  StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-elements';

export default function EnviaB() {
    return (
        <TouchableHighlight style={stylesButton.submit}>
          <Text style={stylesButton.submitText}> Iniciar Sesión</Text>
        </TouchableHighlight>
    );
  }
  
  const stylesButton = StyleSheet.create({
    submit:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
    },
    submitText:{
      paddingTop:13,
      paddingBottom:13,
      color:'#fff',
      textAlign:'center',
      backgroundColor:'#02b2bc',
      borderRadius: 33,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#02b2bc'
    },
  });
  