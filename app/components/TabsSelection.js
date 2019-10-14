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
          <View className="centerCard" style={{
            flex:1,
            position:"absolute",
            width: "90%",
            height: active === "login" ? "50%" : "90%" ,
            top: "-7%",
            alignItems: "center",
            flexDirection:"column",
            backgroundColor:"#fff",
            borderRadius:15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
            elevation: 20,
          }}>
                  <View style={{alignItems:"center" ,flexDirection:"row",marginTop:14,marginBottom:20,
                       height:36, position:"relative"}}>
                        {/* <View style={stylesRegister.barSelected} /> */}
                        <TouchableOpacity 
                        style={stylesRegister.touchable1}
                        >
                          <Text style={{color: "#00B3C1" }}>{(active === "login") ? "Inicia Sesion" : "Registrate"}</Text>
                        </TouchableOpacity>
                    
                  </View>
            </View>
        )
    }
}

