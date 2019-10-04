import React from 'react';
import {  StyleSheet, TouchableHighlight, Button } from 'react-native';
import { Text } from 'react-native-elements';

export default function RegisterB() {
    return (
        <TouchableHighlight style={stylesButton.submit}>
          <Text style={stylesButton.submitText}> Registrate</Text>
          {/* <Button title="Hola"></Button> */}
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
      backgroundColor:'transparent',
      borderRadius: 33,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#fff'
    },
  });
  