import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import HeaderHome from "../components/HeaderHome";
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
            <HeaderHome title="Bienvenido de nuevo" user="Usuario generico" page="Home" />
              <View style={styles.divisionHome}>
                <BoxMoney balance="3,000 MXN"/>
                <BoxMiddle percentage={1}/>
                <View style={styles.scrollHome}>
                  <ScrollView  horizontal >
                    <BoxInformative price={`1000`} infoTitle={`Total de Envios`}/>
                    <BoxInformative price={`$2000`} infoTitle={`Total de Paquetes`}/>
                    <BoxInformative price={`3000`} infoTitle={`Total de Videojuegos`}/>
                    <BoxInformative price={`4000`} infoTitle={`Total de Mercancia`}/>        
                  </ScrollView>
                </View>
                <View style={styles.menu}>
                    <Icon name="bars" type="font-awesome" size={34} onPress={() => this.props.navigation.navigate("Drawer")}/>
                    <Icon name="inbox" type="font-awesome" size={34}/>
                    <Icon name="inbox" type="font-awesome" size={34}/>
                    <Icon name="map-marker" type="font-awesome" size={34}/>
                    <Icon name="cog" type="font-awesome" size={34}/>
                </View>
              </View>
        </View>
      )
    }
  }
  