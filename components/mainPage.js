import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  RegisterModule  from "./pages/registerModule";
import SessionModule from "./pages/sessionModule";



class mainPage extends Component{
    static navigationOptions ={
        header:null
    }
    render(){
        return (
            <View style={styles.container}>
              
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.9,0.1]} end={[0.2,0.8]} style={styles.background}>
              <View style={styles.containerLogo}>
                <Image style={styles.logoImage} source={{uri: "https://www.envia.com/images/envia/logo_enviapaqueteria_home.png"}} />
              </View>
              <View style={styles.containerImages}>
                <Text style={{fontSize:23, color:"white", letterSpacing:2}}>
                  envios
                </Text>
                <Text style={styles.textColor}>
                 INTERNACIONALES
                </Text>
              </View>
             <View style={styles.containerButtons}>
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitSession} onPress={()=>{
                  this.props.navigation.push('Register')
                }}>
                  <Text style={styles.submitText}> Iniciar Sesión</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitRegister} onPress={() =>{
                    this.props.navigation.push('Register')
                    }}>
                  <Text style={styles.submitText}> Registrate</Text>
                </TouchableHighlight>
             </View>
          </LinearGradient>
        </View>
      );
    }
}


class registerPage extends Component {
    render() {
        return (
          <RegisterModule />
      );
    }
}

const rootStack = createStackNavigator(
    {
        Home: mainPage,
        Register: registerPage,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions:{
          headerStyle: {
            backgroundColor: "#1e90ff"
          }
        } 
    },
);

const AppContainer = createAppContainer(rootStack);

export default class MainPage extends Component{
  render(){
      return (
         <AppContainer />
  )
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  background:{
    flex:1, 
    alignItems: "stretch",
    justifyContent: "center"
  },
  containerButtons:{
    flex:2,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    flexDirection: "column",
    // transform: [
    //   {skewY: '-5deg'}
    // ],
  },
  textColor:{
    color:"white",
    paddingBottom:10,
    letterSpacing: 2,
    fontSize:25,
  },
  containerImages:{
    flex:5,
    justifyContent: "flex-end",
    alignItems:"center",
    flexDirection: "column"
  },
  containerLogo:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    paddingTop: 35,
  },
  logoImage:{
    width:150,
    height:150,
    
  },
  submitSession:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:17,
    paddingBottom:17,
    backgroundColor:'#02b2bc',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#02b2bc'
  },
  submitRegister:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:17,
    paddingBottom:17,
    backgroundColor:'transparent',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff'
  },

  submitText:{
    textAlign:'center',
    color:'#fff',
    fontSize: 19,
    letterSpacing: 1.3,
  },

});
// Navigation
// https://www.youtube.com/watch?v=bUesHGYxSLg

// shadow generator https://ethercreative.github.io/react-native-shadow-generator/