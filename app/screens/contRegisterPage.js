import React, { Component } from 'react';
import {View} from 'react-native';
import {Text, Button } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";

export default class registerPage extends Component {
    constructor(props) {
     super(props);
   }
   render() {
     // const value = this.props.navigation.state.params.item
     return (
        <View style={styles.container}> 
            <Text>Hola desde la continuacion de registro</Text>
            <Button title="vamos a verificar" onPress={ ()=> this.props.navigation.navigate("verifyPage")}></Button>
        </View>
         );
     }
 }