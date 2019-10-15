import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";

export default class homePage extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <View style={styles.containerRegister}>
            <Header />
              <View style={styles.division}>
                <Button title="Atras" onPress={ ()=> this.props.navigation.goBack()}></Button>   
                <View className="centerCard" style={styles.cardHome}> 
                    
                </View> 
              </View>
        </View>
      )
    }
  }
  