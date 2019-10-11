import React, { Component } from 'react';
import { View,Text } from "react-native-elements";

export default class Header extends Component{
    render(){
        return(
            <View>
             <Text h4 style={{color:"white", }}>BIENVENIDO!</Text>
             <Text h5 style={{color:"white",  marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
             <Text h5 style={{color:"white", }}>para empezar a realizar envios facil y rapido</Text>
            </View>
        )
    }

}