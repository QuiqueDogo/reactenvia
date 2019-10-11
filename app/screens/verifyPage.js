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
          <Text>Hola desde la continuacion de la verificacion del numero</Text>
          <Button title="vamos a real home" onPress={ ()=> this.props.navigation.navigate("homePage")}></Button>
      </View>
    )
  }
}