import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
                    this.props.navigation.push('loginPage',{
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




// export default mainPage;


// Navigation
// https://www.youtube.com/watch?v=bUesHGYxSLg

// shadow generator https://ethercreative.github.io/react-native-shadow-generator/

// dev.mcastillo@gmail.com / soytigrecampeon UDEMY 


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