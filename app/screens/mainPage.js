import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  TabsSelection  from "./TabsSelection";
import { Button, Input } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";

 export default class mainPage extends Component{
    constructor(props) {
      super(props);
      console.log(this.props);
    }
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
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitSession} onPress={()=>
                  this.props.navigation.navigate('registerPage')
                }>
                  <Text style={styles.submitText}> Iniciar Sesión </Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitRegister} onPress={() =>
                    this.props.navigation.push('Register',{
                      item: "signup",
                    })
                    }>
                  <Text style={styles.submitText}> Registrate</Text>
                </TouchableHighlight>
             </View>
          </LinearGradient>
        </View>
      );
    }
}


class verifyPage extends Component{
  constructor(props) {
    super(props);
    console.log(this)
  }
  render(){
    return(
      <View style={styles.container}> 
          <Text>Hola desde la continuacion de registro</Text>
          <Button title="Atras" onPress={ ()=> this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}

class RealHomePage extends Component{
  constructor(props) {
    super(props);
    console.log(this)
  }
  render(){
    return(
      <View style={styles.container}> 
          <Text>Hola desde real Home </Text>
      </View>
    )
  }
}

// export default mainPage;


// Navigation
// https://www.youtube.com/watch?v=bUesHGYxSLg

// shadow generator https://ethercreative.github.io/react-native-shadow-generator/

// dev.mcastillo@gmail.com / soytigrecampeon UDEMY 