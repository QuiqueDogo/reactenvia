import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    const icon = "";
    switch (this.props.company) {
        case "estafeta":
            image = require("../../assets/img/estafeta-logo.png");
            break;
        case "fedex":
            image = require("../../assets/img/fedex-logo.png");
            break;
      
        default:
            break;
    }
}
 
  render() {
      const price = parseFloat(this.props.price).toFixed(2);
      const {time,currency,company} = this.props
      const sendData = this.props.sendData
    return (
      <View style={styles.content}>
          <View style={styles.cardView}>
            <Image style={styles.ImageStyle} source={image} />
            <View style={styles.containerPriceMoney}>
                <Text style={styles.PriceText}>${price + " " +currency}</Text>
                <Text style={styles.TimeText}>{time}</Text>
            </View>
            <View style={{flex:1 }}>
                <Button icon={{name:"chevron-right", type:"font-awesome", size:18,color:"#d0d0d0"}} buttonStyle={{backgroundColor:"transparent"}} onPress={() => sendData(price, time, company, currency)}/>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    content:{
        height:100,
        width:"100%",
        borderBottomWidth: 1,
        borderColor:"#eeeeee"
    },
    cardView:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    ImageStyle:{
        flex:1,
        height:50,
        width:30,
        marginLeft:13
    },
    PriceText:{
        color:"#014b74",
        fontSize:19
    },
    TimeText:{
        color:"#a2a2a2",
        fontSize:13,
        fontStyle:"italic"
    },
    containerPriceMoney:{
        flex:2,
        paddingLeft:10
    }
})