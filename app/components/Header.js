import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";

export default class Header extends Component {
    constructor(props) {
     super(props);
   }
   render() {
     // const value = this.props.navigation.state.params.item
     return (
               <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={styles.gradiant}>
                 <Text h4 style={{color:"white", }}>BIENVENIDO!</Text>
                 <Text h5 style={{color:"white",  marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
                 <Text h5 style={{color:"white", }}>para empezar a realizar envios facil y rapido</Text>
               </LinearGradient> 
         );
     }
 }