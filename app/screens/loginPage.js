import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  TabsSelection  from "../components/TabsSelection";
import { Button, Input } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";


export default class verifyPage extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <View style={styles.container}> 
            <Text>Hola desde el login</Text>
            <Button title="vamos a verify" onPress={ ()=> this.props.navigation.navigate("verifyPage")}></Button>
        </View>
      )
    }
  }