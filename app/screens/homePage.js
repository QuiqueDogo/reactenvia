import React, { Component } from 'react';
import { Text, View, ScrollView,Animated,TouchableOpacity ,BackHandler} from 'react-native';
import styles from "../../assets/css/stylesMain";
import HeaderHome from "../components/HeaderHome";
import BoxMiddle from "../components/boxMiddle"
import BoxMoney from '../components/boxMoney';
import BoxInformative from '../components/boxInformative';
import MenuEnvia from "../components/menuEnvia";


export default class homePage extends Component{
    constructor(props) {
      super(props);
      this.AnotherOne = new Animated.Value(0);
      this.state = { 
      }
    }

    static navigationOptions ={
      header:null
    }

    overlay = (valueAnother) => {
      Animated.timing(this.AnotherOne,{
        toValue: valueAnother,
        duration: 300,
      }).start();
    };

    MyfFinalMessage = (changedaworld) =>{
      this.props.navigation.navigate(changedaworld)
    }

    render(){ 
     const AnotherOne = this.AnotherOne.interpolate(
        {
          inputRange: [0, 1],
          outputRange: [1250,0]
        });

      return(
        <View style={styles.containerRegister}>
            <HeaderHome title="Bienvenido de nuevo" user="Usuario generico" page="Home" />
              <View style={styles.divisionHome}>
                <BoxMoney balance="3,000 MXN"/>
                <BoxMiddle percentage={0.3}/>
                <View style={styles.scrollHome}>
                  <ScrollView  horizontal >
                    <BoxInformative price={`1000`} infoTitle={`Total de Envios`}/>
                    <BoxInformative price={`$2000`} infoTitle={`Total de Paquetes`}/>
                    <BoxInformative price={`3000`} infoTitle={`Total de Videojuegos`}/>
                    <BoxInformative price={`4000`} infoTitle={`Total de Mercancia`}/>
                       
                  </ScrollView>
                </View>
              </View>
              <Animated.View  style={[styles.overlay,{transform:[{translateY: AnotherOne}]}]} />
              <MenuEnvia MyfFinalMessage={this.MyfFinalMessage.bind(this)} overlay={this.overlay.bind(this)} />
        </View>
      )
    }
  }
  