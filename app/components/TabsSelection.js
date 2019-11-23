import React, { Component } from 'react';
import {View,Text} from 'react-native';
import i18n from "../utils/i18n";

export default class TabsSelection extends Component {
  constructor(props){
    super(props);
    this.state ={
      active:`${this.props.item}`,
      telefono:`${this.props.telefono}`
    }
  }  
    render(){
      let {active,telefono } = this.state;
      
        return(
                  <View style={{alignItems:"center" ,flexDirection:"row",
                       height:36,}}>

                        {telefono === "undefined" && 
                          <Text style={{ color: "#00B3C1" }}>
                             {(active === "login") ? i18n.t("MainPage.Login") : i18n.t("MainPage.Register") } 
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

