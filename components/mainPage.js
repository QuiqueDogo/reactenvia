import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  RegisterModule  from "./pages/registerModule";
import  TabsSelection  from "./pages/TabsSelection";
import { Button } from 'react-native-elements';
import styles from "../assets/css/stylesMain";
import newStyles from "../assets/css/newStyles.scss";




class mainPage extends Component{
    static navigationOptions ={
        header:null
    }
    render(){
		console.log(newStyles)
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
  }

  
  render() {
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
            	</View>
              
            </View>
    	);
    }
}



const rootStack = createStackNavigator(
    {
        Home: mainPage,
        Register: registerPage
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