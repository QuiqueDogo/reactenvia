import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class PickerAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }



  render() {
      const {label,data} = this.props
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:15,
        borderColor:"#dbdbdb",
        borderWidth:1,
        width:"100%",
        height:48,
        backgroundColor:"#fff",
        marginTop:18,
    },
    dropdown:{
        borderColor:"#dbdbdb",
        borderWidth:1,
        width:"80%",
        backgroundColor:"#fff",
    },
    text:{
        color:"#38b3b9",
        fontWeight:"200",
        fontSize:16,
        marginTop:12,
        marginLeft:13
    },
    texhighligth:{
        color:"black"
    }
})