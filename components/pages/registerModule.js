import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView, Dimensions} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import Session from "./Tabs/session";
import Register from "./Tabs/register";

const {width} = Dimensions.get("window");
export default class RegisterModule extends Component{
  constructor(props){
    super(props);

    this.state = {
      item: "Algo decia aquí",
      active: 0,
      xTabOne:0,
      xTabTwo:0,
      translateX: new Animated.Value(0),
      translateXTabOne:new Animated.Value((props.item == "login") ? 0 : width),
      translateXTabTwo:new Animated.Value((props.item == "signup") ? 0 : width),
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
    let {xTabOne,xTabTwo,translateX,active, translateXTabOne ,translateXTabTwo} = this.state 
    
      return (
        <View style={stylesRegister.containerRegister}>
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={stylesRegister.gradiant}>
             <Text style={{color:"white", fontSize:22}}>BIENVENIDO!</Text>
             <Text style={{color:"white", fontSize:14, marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
             <Text style={{color:"white", fontSize:14,}}>para empezar a realizar envios facil y rapido</Text>
             <NavigationEvents 
              onWillFocus={this.willFocusAction}
             />
          </LinearGradient>
          <View style={stylesRegister.background}>
              <View className="centerCard" style={{
                flex:1,
                position:"absolute",
                width: "90%",
                height: active === 0 ? "50%" : "90%" ,
                top: "-7%",
                alignItems: "center",
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
                <View style={stylesRegister.insideSession}>
                  <View style={{flexDirection:"row",marginTop:14,marginBottom:20,
                 height:36, position:"relative"}}>
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
                        <Text style={{color:  active === 1 ? "#00B3C1" : "#a3bfcd", marginLeft:30}}>Registrate</Text>
                      </TouchableOpacity>
                  </View>
                  <ScrollView>
                      <Animated.View style={{flex:1,alignItems: "stretch",justifyContent: "center",flexDirection: "column",transform:[{
                        translateX: translateXTabOne
                      }]}}>
                        <Session />
                      </Animated.View>

                      <Animated.View style={{transform:[{
                        translateX: translateXTabTwo
                      }]}}>
                        <Register />
                      </Animated.View>
                  </ScrollView>
                </View>
              </View>
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
    alignItems:"flex-start",
  },
})


// Navigation 
// https://www.youtube.com/watch?v=bUesHGYxSLg

//sliding tabbar react native 
//https://www.youtube.com/watch?v=mRt7XIQoAO0

//for passgin data for components 
//https://snack.expo.io/@andypandy/catching-values-with-navigation-listeners