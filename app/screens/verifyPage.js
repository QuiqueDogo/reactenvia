import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";


export default class verifyPage extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.container}> 
          <Text>Hola desde la continuacion de registro</Text>
          <Button title="Atras" onPress={ ()=> this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}