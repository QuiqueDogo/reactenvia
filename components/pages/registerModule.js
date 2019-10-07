import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class RegisterModule extends Component{
  state ={
    active:0,
    xTabOne:0,
    xTabTwo:0,
    translateX: new Animated.Value(0)
  }

  handleSlide = type =>{
    let {active,xTabOne,xTabTwo,translateX} = this.state; 
      Animated.spring(translateX,{
        toValue:type,
        duration:100
      }).start()
  }

  render(){
    let {xTabOne,xTabTwo,translateX,active} = this.state 
      return (
        <View style={stylesRegister.containerRegister}>
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={stylesRegister.gradiant}>
             <Text style={{color:"white", fontSize:22}}>BIENVENIDO!</Text>
             <Text style={{color:"white", fontSize:14, marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
             <Text style={{color:"white", fontSize:14,}}>para empezar a realizar envios facil y rapido</Text>
          </LinearGradient>
          <View style={stylesRegister.background}>
              <View style={stylesRegister.fly}>
                <View style={stylesRegister.insideSession}>
                  <View style={{flexDirection:"row",marginTop:14,marginBottom:20, height:36, position:"relative"}}>
                    <Animated.View style={{position: "absolute",
                      width: "34%",
                      height: "6%",
                      top: 35,
                      left:0,
                      backgroundColor: "#00B3C1",
                      transform:[{
                        translateX
                      }]
                      }} />
                      <TouchableOpacity 
                      style={stylesRegister.touchable1} 
                      onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
                      onPress= {() => this.setState({active:0}, ()=> this.handleSlide(xTabOne) )} 
                      >
                        <Text style={{color: "#a3bfcd"}}>Inicia Sesión</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                      style={stylesRegister.touchable2}
                      onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
                      onPress= {() => this.setState({active:1}, ()=> this.handleSlide(xTabTwo) )}
                      >
                        <Text style={{color: "#a3bfcd"}}>Registrate</Text>
                      </TouchableOpacity>
                  </View>
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
  fly:{
    flex:1,
    position:"absolute",
    width: "80%",
    height: "50%",
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
  },
  insideSession:{
    width: "80%",
    marginLeft: 16,
    marginRight: "auto",
  },
  touchable1:{
    flex:2 ,
    marginRight:15,
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

