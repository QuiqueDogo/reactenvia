import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../assets/css/StylesGenerateGuide';
import HeaderHome from "../components/HeaderHome";
import Guides from "../components/Guides";


export default class GenerateGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.sendData = this.sendData.bind(this)
  }
  static navigationOptions ={
    header:null
  };

 sendData = (price,time,company,currency) => {
    this.props.navigation.navigate("DetailInfo",{
        info:{
          price,time,company,currency  
        }
    })
 }

  render() {
      const rows =[]; 
      const AllinOne = [
          {id:1,price:60.51,time:"24 a 36 hrs",company:"fedex", currency:"MXN"},
          {id:2,price:123.40,time:"Dia Siguiente",company:"estafeta", currency:"USD"},
          {id:3,price:23.00,time:"2 a 4 dias",company:"estafeta", currency:"MXN"},
          {id:4,price:123.00,time:"1 a 5 dias",company:"fedex", currency:"USD"},
          {id:5,price:53.00,time:"1 a 5 dias",company:"fedex", currency:"MXN"},
        ];
    AllinOne.forEach(element => {
        rows.push(<Guides key={element.id} price={element.price} time={element.time} company={element.company} currency={element.currency} sendData={this.sendData} />)
    });
    
        
    return (
      <View style={styles.containerRegister}>
        <HeaderHome title="Generar Guias" user="" pag="Generate" />
        <View style={styles.Division}>
            <View style={styles.cardGenerate}>
                <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
                    {rows}
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}
