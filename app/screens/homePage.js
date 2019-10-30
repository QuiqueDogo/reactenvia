import React, { Component } from 'react';
import { Text, View, ScrollView,TouchableOpacity ,BackHandler, StyleSheet,Platform} from 'react-native';
import styles from "../../assets/css/stylesMain";
import HeaderHome from "../components/HeaderHome";
import BoxMiddle from "../components/boxMiddle"
import BoxMoney from '../components/boxMoney';
import BoxInformative from '../components/boxInformative';
import MenuEnvia from "../components/menuEnvia";
// import BottomDrawer from 'rn-bottom-drawer';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'




//Cambia el menu de Envia por rn-bottom-drawer para la parte scrolleable


export default class homePage extends Component{
    constructor(props) {
      super(props);
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

    renderHeader = () => (
      <View style={estilos.header}>
        <View style={estilos.panelHeader}>
            <MenuEnvia MyfFinalMessage={this.MyfFinalMessage.bind(this)}/>
        </View>
      </View>
    )

    fall =new Animated.Value(1);
    bs = React.createRef();
    render(){ 
      return(
        <View style={styles.containerRegister}>
        <BottomSheet 
              snapPoints = {[300, 100]}
              renderHeader={this.renderHeader}
              initialSnap={1}
              callbackNode={this.fall}
              enabledInnerScrolling={false}
              onCloseEnd={()=>console.log("hola")}
            />
          <Animated.View style={[styles.containerRegister,{opacity: Animated.add(0.1, Animated.multiply(this.fall, 0.9))}]} >
              <HeaderHome title="Bienvenido de nuevo" user="Usuario generico" pag="Home" />
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
                <View style={{flex:2, width:"96%", alignItems:"center", marginRight:"auto",marginLeft:"auto"}}>
                
                </View>
                
          </Animated.View>
        </View>
      )
    }
  }
  

  const estilos = StyleSheet.create({
    header: {
      backgroundColor: '#fff',
      height:300,
      paddingTop: 20,
      borderRadius:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    panelHeader: {
      alignItems: 'center',
    },
  })