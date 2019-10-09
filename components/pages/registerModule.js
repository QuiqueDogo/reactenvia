import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Dimensions, TextInput, Platform} from 'react-native';
import { NavigationEvents} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import Register from "./Tabs/register";
import Header from "./Tabs/header";
import TextPlane from "./Tabs/text";

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



  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  willFocusAction = (payload) => {
    let params = payload.state.params;
    if (params && params.item) {
      this.setState({
        item: params.item,
      });

      // if(params.item === "signup") this.refs.registerTab.props.onPress();
      // else if(params.item === "login") this.refs.loginTab.props.onPress();
    }
  }

  render(){
    let {xTabOne,xTabTwo,translateX,active, translateXTabOne ,translateXTabTwo} = this.state 
    // const { isFocused } = this.state;
    // const labelStyle = {
    //   position: 'absolute',
    //   left: 30,
    //   top: !isFocused ?  (Platform.OS =="android") ? 20 :  25  : (Platform.OS =="android") ? -3 :5,
    //   fontSize: !isFocused ? 20 : 14,
    //   color: !isFocused ? '#aaa' : '#000',
    //   backgroundColor: "white",
    //   width:"20%",
    //   textAlign:"center"
    // };
    
      return (
        <View style={stylesRegister.containerRegister}>
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={stylesRegister.gradiant}>
             <Text h4 style={{color:"white", }}>BIENVENIDO!</Text>
             <Text h5 style={{color:"white",  marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
             <Text h5 style={{color:"white", }}>para empezar a realizar envios facil y rapido</Text>
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
                justifyContent:"center",
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
                  {/* COMPONENTES */}
                  {/* <View style={{flexDirection:"row",marginTop:14,marginBottom:20,
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
                        <TextPlane  window={`${active}`} label="Registrate"></TextPlane>
                      </TouchableOpacity>
                  </View> */}



                </View>
                      <Animated.View style={{
                        flex:1,
                        position:"absolute",
                        alignItems:"center",
                        width: "90%",
                        height: "50%",
                        justifyContent:"space-around",
                        transform:[{
                        translateX: translateXTabOne
                      }]}}>
                            <TextInput 
                            style={stylesRegister.submitRegister}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            placeholder="User"
                            />
                            {/* <Text style={labelStyle}>TEST</Text> */}
                            <TextInput 
                            style={stylesRegister.submitRegister}
                            secureTextEntry={true}
                            placeholder="Password"
                            />
                            <TouchableOpacity style={stylesRegister.buttonlogin}>
                                <Text style={stylesRegister.text}>Inicia Sesion</Text>
                                <Ionicons style={{marginLeft:30}} name="ios-arrow-round-forward" size={40} color="white"></Ionicons>
                            </TouchableOpacity> 
                      </Animated.View>

                      <Animated.View style={{
                        flex: 1,
                        height:"70%",
                        width:"90%",
                        position: "absolute",
                        alignItems: 'center',
                        justifyContent: 'space-around',

                        transform:[{
                        translateX: translateXTabTwo
                      }]}}>
                        <Register />
                        <TouchableOpacity style={stylesRegister.buttonsubmit}>
                                <Text style={stylesRegister.text}>Continuar</Text>
                                <Ionicons style={{marginLeft:30}} name="ios-arrow-round-forward" size={40} color="white"></Ionicons>
                        </TouchableOpacity> 
                      </Animated.View>
                 
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


// Navigation 
// https://www.youtube.com/watch?v=bUesHGYxSLg

//sliding tabbar react native 
//https://www.youtube.com/watch?v=mRt7XIQoAO0

//for passgin data for components 
//https://snack.expo.io/@andypandy/catching-values-with-navigation-listeners

//Floating animated
//https://goshakkk.name/floating-label-input-rn-animated/

//CSS options on react native 
//https://www.styled-components.com/docs/faqs
//https://blog.bitsrc.io/styling-in-react-native-c48caddfbe47