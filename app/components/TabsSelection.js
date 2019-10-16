import React, { Component } from 'react';
import {View, TouchableOpacity, Text,Dimensions} from 'react-native';
import stylesRegister from "../../assets/css/stylesTabsSelection";

const {width} = Dimensions.get("window");

export default class TabsSelection extends Component {
  constructor(props){
    super(props);
    this.state ={
      active:`${this.props.item}`,
      telefono:`${this.props.telefono}`
    }
  }  
    render(){
      let {active,telefono } = this.state
      
        return(
                  <View style={{alignItems:"center" ,flexDirection:"row",marginTop:14,
                       height:36, position:"relative"}}>
                        {/* <View style={stylesRegister.barSelected} /> */}
                        {telefono === "undefined" && 
                          <Text style={{ color: "#00B3C1" }}>
                             {(active === "login") ? "Inicia Sesion" : "Registrate" } 
                          </Text>          
                        }
                        {telefono !="undefined" && 
                          <Text style={{ color: "#969696" }}>
                            Codigo Enviado a
                          </Text>     
                        }

                  </View>
        )
    }
}

