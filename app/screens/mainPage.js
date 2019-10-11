import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  TabsSelection  from "./TabsSelection";
import { Button, Input } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import newStyles from "../../assets/css/newStyles.scss";
import RealHomePagetool from "./Home";




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
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitSession} onPress={()=>
                  this.props.navigation.push('Register',{
                    item: "login",
                  })
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


class registerPage extends Component {
   constructor(props) {
    super(props);
    const data = this.props.navigation.state.params.item
    if (data ==="login") {
      this.state ={
        active:1,
        non:1, 
        data1: 0,
        fresh: 12,
      }
    }else{
      this.state ={
        active:1,
        non:1, 
      }
    }
  }
  
  ButtonOnClick = fuck =>{
    console.log(`Lo primero que dire sera: ${fuck}`)
  }


  

  render() {
    const value = this.props.navigation.state.params.item
    return (
            <View style={styles.containerRegister}>
              <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={styles.gradiant}>
                <Text h4 style={{color:"white", }}>BIENVENIDO!</Text>
                <Text h5 style={{color:"white",  marginTop:10,}}>Inicia Sesion en tu cuenta o registrate con nosotros</Text>
                <Text h5 style={{color:"white", }}>para empezar a realizar envios facil y rapido</Text>
              </LinearGradient>
              	<View style={styles.division}>
                  <TabsSelection 
                    item={`${this.props.navigation.state.params.item}`}
                  />			
                  <Button title={(value == "login") ? "Inicia Sesion":"Registrate"} onPress={() => this.props.navigation.navigate((value === "login")? "Welcome" :"Verify", this.state )} />      
            	  </View>

            </View>
    	);
    }
}

class verifyPage extends Component{
  constructor(props) {
    super(props);
    // console.log(this)
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
    // console.log(this)
  }
  render(){
    return(
      // <View style={styles.container}> 
      //     <Text>Hola desde real Home </Text>
      // </View>
      <RealHomePagetool /> 
    )
  }
}



const rootStack = createStackNavigator(
    {
        Home: mainPage,
        Register: registerPage,
        Verify: verifyPage,
        Welcome: RealHomePage,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions:{
          headerStyle: {
            backgroundColor: "white"
          }
        } 
    },
);


const AppContainer = createAppContainer(rootStack);

export default createAppContainer(AppContainer);


// Navigation
// https://www.youtube.com/watch?v=bUesHGYxSLg

// shadow generator https://ethercreative.github.io/react-native-shadow-generator/

// dev.mcastillo@gmail.com / soytigrecampeon UDEMY 