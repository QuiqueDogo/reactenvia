import React, { Component } from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header"

export default class verifyPage extends Component{
    constructor(props) {
      super(props);
    }
    static navigationOptions ={
      header:null
  }
    render(){
      return(
        <View style={styles.containerRegister}>
          <Header />
            <View style={styles.division}>
            <TabsSelection item="login"/>			
            <Button  title="Siguiente" onPress={() => this.props.navigation.navigate('homePage')} />  
            <Button  title="atras" onPress={() => this.props.navigation.goBack()} />    
            </View>

        </View>
      )
    }
  }