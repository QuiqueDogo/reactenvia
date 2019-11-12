import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class Guides extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.length)
    this.state = {
        info: this.props.data
    };
}
 
  render() {
    //   const price = parseFloat(this.props.price).toFixed(2);
      const {time,currency,company} = this.props
      const {info} = this.state
      const sendData = this.props.sendData
      const List = info.map((info,index) => {
          if(info.data.length == 1){
                switch (info.data[0].carrier) {
                    case "estafeta":
                        image = require("../../assets/img/estafeta-logo.png");
                        break;
                    case "fedex":
                        image = require("../../assets/img/fedex-logo.png");
                        break;
                    case "noventa9Minutos":
                        image = require("../../assets/img/99min.jpg");
                        break;
                    case "noventa9Minutos":
                        image = require("../../assets/img/redpack.jpeg");
                        break;
                    case "redpack":
                        image = require("../../assets/img/redpack.jpeg");
                        break;
                    case "sendex":
                        image = require("../../assets/img/sendex.png");
                        break;    
                    case "dhl":
                        image = require("../../assets/img/dhl.jpg");
                        break;    
                    case "quiken":
                        image = require("../../assets/img/quiken.jpg");
                        break;    
                    case "carssa":
                        image = require("../../assets/img/carssa.png");
                        break;    
                    case "ups":
                        image = require("../../assets/img/ups.png");
                        break;    
                    default:
                        image = require("../../assets/img/icon.png")
                        break;
                }
                const time = info.data[0].deliveryEstimate;
                const price = parseFloat(info.data[0].basePrice).toFixed(2);
                const company = info.data[0].carrier;
                const currency = info.data[0].currency
            return(
                <TouchableOpacity key={index+"search"} style={styles.content} onPress={() => sendData(price, time, company, currency)}>  
                    <View  style={styles.cardView}>
                        <Image style={styles.ImageStyle} source={image} />
                        <View style={styles.containerPriceMoney}>
                            <Text style={styles.PriceText}>$ {price+ " "+ currency}</Text>
                            <Text style={styles.TimeText}>{company+ " " + time}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button icon={{name:"chevron-right", type:"font-awesome", size:18,color:"#d0d0d0"}} buttonStyle={{backgroundColor:"transparent"}} 
                            // onPress={() => console.log(this.state.info)}
                            // onPress={() => sendData(price, time, company, currency)}
                            />
                        </View> 
                    </View>
                </TouchableOpacity>

        )
        }
        if(info.data.length >= 1){
            var second = Object.keys(info.data).map((val,i)=>{
                const price = parseFloat(info.data[i].basePrice).toFixed(2);
                const time = info.data[i].deliveryEstimate;
                const company = info.data[i].carrier;
                const currency = info.data[i].currency
                switch (info.data[i].carrier) {
                    case "estafeta":
                        image = require("../../assets/img/estafeta-logo.png");
                        break;
                    case "fedex":
                        image = require("../../assets/img/fedex-logo.png");
                        break;
                    case "noventa9Minutos":
                        image = require("../../assets/img/99min.jpg");
                        break;
                    case "redpack":
                        image = require("../../assets/img/redpack.jpeg");
                        break;
                    case "sendex":
                        image = require("../../assets/img/sendex.png");
                        break;
                    case "dhl":
                        image = require("../../assets/img/dhl.jpg");
                        break;
                    case "quiken":
                        image = require("../../assets/img/quiken.jpg");
                        break;
                    case "carssa":
                        image = require("../../assets/img/carssa.png");
                        break;
                    case "ups":
                        image = require("../../assets/img/ups.png");
                        break;
                    default:
                        
                        image = require("../../assets/img/icon.png")
                        break;
                }
                return(
                    <TouchableOpacity key={i+"searchdoble"+info.data[i].carrier} style={styles.content} onPress={() => sendData(price, time, company, currency)}>
                        <View  style={styles.cardView}>
                        <Image style={styles.ImageStyle} source={image} />
                        <View style={styles.containerPriceMoney}>
                            <Text style={styles.PriceText}>$ {price+ " "+ currency}</Text>
                            <Text style={styles.TimeText}>{company+ " " + time}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button icon={{name:"chevron-right", type:"font-awesome", size:18,color:"#d0d0d0"}} buttonStyle={{backgroundColor:"transparent"}} 
                            // onPress={() => console.log(this.state.info)}
                            // onPress={() => sendData(price, time, company, currency)}/> 
                            />
                        </View> 
                        </View>
                    </TouchableOpacity>
                )
            })
            return second;
        }
      })
    return (
      <View >
              {List}
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