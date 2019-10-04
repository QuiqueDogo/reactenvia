import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class registerPage extends Component{
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
            <TouchableHighlight style={styles.submit}>
              <Text style={styles.submitLogin}> Iniciar Sesión</Text>
            </TouchableHighlight>
             <TouchableHighlight style={styles.submit} onPress={() =>{
                 this.props.navigation.navigate('Details')
                }}>
              <Text style={styles.submitText}> Registrate</Text>
            </TouchableHighlight>
             </View>   
          </LinearGradient>
        </View>
      );
    }
}


class DetailsScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
}

const rootStack = createStackNavigator(
    {
        Home: registerPage,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home",
    }
);

const AppContainer = createAppContainer(rootStack);

export default class Register extends Component{
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
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    flexDirection: "column",
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
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
  },
  submitText:{
    paddingTop:13,
    paddingBottom:13,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'transparent',
    borderRadius: 33,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitLogin:{
    paddingTop:13,
    paddingBottom:13,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#02b2bc',
    borderRadius: 33,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#02b2bc'
  },

});
