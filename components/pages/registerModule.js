import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class RegisterModule extends Component{
  render(){
      return (
        <View style={stylesRegister.containerRegister}>
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={stylesRegister.gradiant}>
             <Text>Bienvenido</Text>
          </LinearGradient>
          <View style={stylesRegister.background}>
              <View style={stylesRegister.fly}>
                <View>
                  <Text>Contenido</Text>
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
    alignItems: "center",
    justifyContent: "center"
  },
  background:{
    flex:4, 
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fly:{
    position:"absolute",
    width: "80%",
    height: "40%",
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

    elevation: 17,
  },
 
})


// https://www.youtube.com/watch?v=bUesHGYxSLg