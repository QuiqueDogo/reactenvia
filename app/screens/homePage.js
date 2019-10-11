import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from "../../assets/css/stylesMain";

export default class homePage extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <View style={styles.container}> 
            <Text>Hola desde real Home </Text>
        </View>
      )
    }
  }
  