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
              <View style={styles.divisionHome}>
                <BoxMoney balance="3,000 MXN"/>
                <BoxMiddle />
                <View style={styles.scrollHome}>
                  <ScrollView  horizontal >
                    <BoxInformative price={`1000`} infoTitle={`Total de Envios`}/>
                    <BoxInformative price={`$2000`} infoTitle={`Total de Paquetes`}/>
                    <BoxInformative price={`3000`} infoTitle={`Total de Videojuegos`}/>
                    <BoxInformative price={`4000`} infoTitle={`Total de Mercancia`}/>        
                  </ScrollView>
                </View>
                <View style={styles.menu}>
                    <Button title="A drawer" onPress={() => this.props.navigation.navigate("Drawer")} />
                </View>
              </View>
        </View>
      )
    }
  }
  