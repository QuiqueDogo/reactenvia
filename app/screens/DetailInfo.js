import React, { Component } from 'react';
import { View, Text,Image,Animated,TouchableOpacity } from 'react-native';
import styles from "../../assets/css/StyleDetailInfo";
import { LinearGradient } from 'expo-linear-gradient';
import { Button,Icon } from 'react-native-elements';


export default class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedRotation = new Animated.Value(1);
    this.realRotate = new Animated.Value(1)
    this.ButtonAnimated = new Animated.Value(1)
    this.toggleFlag = 0;
    this.state = {
      disabled: true,
      back:false
    };
   
    

    switch (this.props.navigation.state.params.info.company) {
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
  }

  static navigationOptions ={
    header:null
  };

  Rotation(value){

      Animated.timing(
        this.animatedRotation,
        {
          toValue: value,
          duration: 275
        }
        ).start();
      Animated.timing(
        this.realRotate,
        {
          toValue: value,
          duration: 155
        }
        ).start();
      Animated.timing(
        this.ButtonAnimated,
        {
          toValue: value,
          duration: 155
        }
        ).start();
        

  }

  PressIn(){
    if(this.toggleFlag == 0){
      this.Rotation(0);
      this.setState(() => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 1,
            duration: 215
          }
          ).start(() => {
            
            this.toggleFlag = 1;
          });
        });
    } else {
      this.Rotation(1);
      this.setState(() => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 0,
            duration: 215
          }
          ).start(() => {
            
            this.toggleFlag = 0;
          });
        });
    }
  }

  
  doSometing = () => {
    console.log(this.state.button)
  }
  

  render() {
    const animatedValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [0, 130]
      });
    const animatedRotation = this.animatedRotation.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [0, 15]
      });
      const Rotation = this.realRotate.interpolate(
        {
          inputRange: [0, 1],
          outputRange: [`180deg`, `0deg`]
        });
      const ButtonAnimated = this.ButtonAnimated.interpolate(
        {
          inputRange: [0, 1],
          outputRange: [140, 0]
        });
    const navigation = this.props.navigation.state.params.info;
    const price = parseFloat(navigation.price).toFixed(2);
    const {company,currency,time} = this.props.navigation.state.params.info
    return (
      <View style={styles.containerRegister}>
        <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
             <View style={styles.textHome}>
                 <Text style={styles.textHome}>Generar Guias</Text>
             </View>
             <Button containerStyle={{position:"absolute",left:15,top:40}} raised icon={{ name:"chevron-left", type:"font-awesome", size:19, color:"#cccccc",}}  buttonStyle={{height:45,width:45, borderRadius:30,backgroundColor:"#fff"}} onPress={() => this.props.navigation.goBack()}/>
         </LinearGradient>
         <View style={styles.Division}>
           <Animated.View style={{flex:1,
                      width: "94%",
                      position:"absolute",
                      top:"-4%",
                      alignItems: "center",
                      flexDirection:"column",
                      backgroundColor:"#fff",
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      borderBottomLeftRadius: animatedRotation,
                      borderBottomRightRadius: animatedRotation,
                      shadowColor: "#000",
                      shadowOpacity: 0.46,
                      shadowRadius: 11.14,
                      elevation: 20,
                      shadowOffset: {
                          width: 0,
                          height: 8,
                      },
                      height:130}} >
            <View style={styles.content}>
                <TouchableOpacity style={styles.cardView} onPress={() => this.PressIn()}>
                  <Image style={styles.ImageStyle} source={image} />
                  <View style={styles.containerPriceMoney}>
                      <Text style={styles.PriceText}>${price + " " +currency}</Text>
                      <Text style={styles.TimeText}>{time}</Text>
                  </View>
                  <View style={{flex:1 }}>
                    <Animated.View style={{transform:[{rotate:Rotation}]}}>
                      <Icon name="chevron-down" type="font-awesome" size={18} color="#d0d0d0" />
                    </Animated.View>
                   
                  </View>
                </TouchableOpacity>
                <Animated.View style={{
                    flex:1,
                    width: "100%",
                    top:131,
                    position:"absolute",
                    alignItems: "center",
                    flexDirection:"column",
                    backgroundColor:"#f2f2f2",
                    borderTopLeftRadius: animatedRotation,
                    borderTopRightRadius: animatedRotation,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    shadowColor: "#000",
                    shadowOpacity: 0.46,
                    shadowRadius: 2.14,
                    elevation: 2,
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    height:animatedValue,
                     }}>
                  <View style={{flexDirection:"row", justifyContent: 'space-between',width:"100%",marginTop:20,}}>
                    <Text style={{color:"#aeaeae",marginLeft:30}}>Costo:</Text>
                    <Text style={{color:"#9d9d9d",marginRight:30}}>${price + " " +currency}</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent: 'space-between',width:"100%",}}>
                    <Text style={{color:"#aeaeae",marginLeft:30}}>Zona Extendida:</Text>
                    <Text style={{color:"#9d9d9d",marginRight:30}}>${price + " " +currency}</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent: 'space-between',width:"100%",}}>
                    <Text style={{color:"#aeaeae",marginLeft:30}}>Seguro:</Text>
                    <Text style={{color:"#9d9d9d",marginRight:30}}>${price + " " +currency}</Text>
                  </View>
                  
                </Animated.View>
              </View>
              <Animated.View 
              style={{
                position:"absolute",
                bottom:-20,
                transform:[{translateY: ButtonAnimated}],
                zIndex:12,
                elevation:5
                }}>
              <Button 
               title="Generar" 
               buttonStyle={styles.buttonStyleRegister} 
               titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} iconRight 
               iconContainerStyle={{ paddingLeft: 20 }} 
               icon={{ name:"dollar", type:"font-awesome", size:19, color:"white",}} />
              </Animated.View>
           </Animated.View>
         </View>
      </View>
    );
  }
}
