import React, { Component } from 'react';
import {View, TouchableOpacity, Animated, Text,Dimensions,StyleSheet,Platform, Button} from 'react-native';
import { NavigationEvents } from 'react-navigation';


const {width} = Dimensions.get("window");

export default class TabsSelection extends Component {
  constructor(props){
    super(props);
    this.state = {
      algo: `${this.props.item}`,
      item: "Algo decia aquí",
      active: 0,
      xTabOne:0,
      xTabTwo:0,
      translateX: new Animated.Value(0),
      translateXTabOne:new Animated.Value((this.props.item == "login") ? 0 : width),
      translateXTabTwo:new Animated.Value((this.props.item == "signup") ? 0 : width),
      isFocused: false,
    }
  }

  handleSlide = type =>{
    let {active,xTabOne,xTabTwo,translateX, translateXTabOne ,translateXTabTwo} = this.state; 
      Animated.spring(translateX,{
        toValue:type,
        duration:100
      }).start()
      if(active ===0){
        Animated.parallel([
          Animated.spring(translateXTabOne,{
            toValue:0,
            duration: 100,
          }).start(),
          Animated.spring(translateXTabTwo,{
            toValue:width,
            duration: 100,
          }).start(),
        ])
      }else{
        Animated.parallel([
          Animated.spring(translateXTabOne,{
            toValue:-width,
            duration: 100,
          }).start(),
          Animated.spring(translateXTabTwo,{
            toValue:0,
            duration: 100,
          }).start(),
        ])
      }
  }

  willFocusAction = (payload) => {

    let params = payload.state.params;
    if (params && params.item) {
      this.setState({
        item: params.item,
      });
      
      if(params.item === "signup") this.refs.registerTab.props.onPress();
      else if(params.item === "login") this.refs.loginTab.props.onPress();
    }
  }



    render(){
        const test = this.state;
        console.log(this.props.navigator.actions.push)
        let {xTabOne,xTabTwo,translateX,active, translateXTabOne ,translateXTabTwo} = this.state 
        return(
          <View className="centerCard" style={{
            flex:1,
            position:"absolute",
            width: "90%",
            height: active === 0 ? "50%" : "90%" ,
            top: "-7%",
            alignItems: "center",
            justifyContent:"flex-start",
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
            <View style={{flexDirection:"row",marginTop:14,marginBottom:20,
                 height:36, position:"relative"}}>
                   <NavigationEvents 
                        onWillFocus={this.willFocusAction}
                      />
                    <Animated.View className="tabIndicator" style={{position: "absolute",
                      width: "34%",
                      height: "6%",
                      top: 35,
                      left:10,
                      backgroundColor: "#00B3C1",
                      transform:[{
                        translateX
                      }]
                      }} />
                      <TouchableOpacity 
                      style={stylesRegister.touchable1} 
                      ref="loginTab"
                      onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x, translateX : new Animated.Value((active === 0) ? event.nativeEvent.layout.x : 0)})}
                      onPress= {() => this.setState({active:0}, ()=> this.handleSlide(xTabOne) )} 
                      >
                        <Text style={{color: active === 0 ? "#00B3C1" : "#a3bfcd" }}>Inicia Sesión</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="registerTab"
                      ref="registerTab"
                      style={stylesRegister.touchable2}
                      onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x, translateX : new Animated.Value((active === 1) ? event.nativeEvent.layout.x : 0)})}
                      onPress= {() => this.setState({active:1}, ()=> this.handleSlide(xTabTwo) )}
                      >
                        <Text style={{color:  active === 1 ? "#00B3C1" : "#a3bfcd", marginLeft:40}}>Registrate</Text>
                      </TouchableOpacity>
                  </View>
            </View>
        )
    }
}

const stylesRegister = StyleSheet.create({
  containerRegister:{
    flex:1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  gradiant:{
    flex:1, 
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
  },
  background:{
    flex:5, 
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  insideSession:{
    flex:1,
    width: "80%",
    marginLeft: 16,
    marginRight: "auto",
  },
  touchable1:{
    flex:2 ,
    justifyContent:'center',
    alignItems:"center",
  },
  touchable2:{
    flex:3 ,
    justifyContent:'center',
  },
  submitRegister:{
      height: 50,
      width: "90%",
      backgroundColor:'transparent',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#a3bfcd',
      paddingLeft: 15
    },
  buttonlogin:{
      flex:1, 
      flexDirection: "row",
      alignItems:"center",
      alignContent: 'center',
      justifyContent: 'center',
      position:"absolute",
      width:"80%",
      height:Platform.OS == "ios" ?"40%": "50%",
      top: Platform.OS == "android" ? 150 : 200,
      backgroundColor:'#02b2bc',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#02b2bc'
  },
  buttonsubmit:{
    flex:1, 
    flexDirection: "row",
    alignItems:"center",
    alignContent: 'center',
    justifyContent: 'center',
    position:"absolute",
    width:"80%",
    height:Platform.OS == "ios" ?"15%": "19%",
    bottom: Platform.OS == "android" ? -88 : -110,
    backgroundColor:'#02b2bc',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#02b2bc'
},
  text:{
      color:"white",
      textAlign:"center",
      letterSpacing:1.3, 
      fontSize:19,
  }
})

