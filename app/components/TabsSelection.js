import React, { Component } from 'react';
import {View, TouchableOpacity, Text,Dimensions} from 'react-native';
import stylesRegister from "../../assets/css/stylesTabsSelection";

const {width} = Dimensions.get("window");

export default class TabsSelection extends Component {
  constructor(props){
    super(props);
    this.state ={
      active:`${this.props.item}` 
    }
  }  
    render(){
      let {active} = this.state
        return(
                  <View style={{alignItems:"center" ,flexDirection:"row",marginTop:14,
                       height:36, position:"relative"}}>
                        {/* <View style={stylesRegister.barSelected} /> */}
                        <TouchableOpacity 
                        style={stylesRegister.touchable1}
                        >
                          <Text style={{color: "#00B3C1" }}>{(active === "login") ? "Inicia Sesion" : "Registrate"}</Text>
                        </TouchableOpacity>
                    
                  </View>
        )
    }
}

