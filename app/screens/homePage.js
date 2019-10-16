import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";
import BoxMiddle from "../components/boxMiddle"
import BoxMoney from '../components/boxMoney';
import BoxInformative from '../components/boxInformative';

export default class homePage extends Component{
    constructor(props) {
      super(props);
    }
    static navigationOptions ={
      header:null
    }
    render(){
      return(
        <View style={styles.containerRegister}>
            <Header title="Bienvenido de nuevo" title2="Usuario generico" page="Home" />
              <View style={styles.division}>
                <BoxMoney balance="3,000 MXN"/>
                <BoxMiddle />
                  <Button style={styles.buttonFloating} title="Validar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonHome} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"share-alt", type:"font-awesome", size:26, color:"white",}} 
                  // onPress={() => this.props.navigation.navigate('verifyPage')}/>
                  onPress={() => console.log("hola")}/>
                <ScrollView horizontal style={styles.scrollHome}>
                  <BoxInformative />
                  <BoxInformative />
                  <BoxInformative />
                </ScrollView>
                <View style={styles.menu}>

                </View>
              </View>
        </View>
      )
    }
  }
  