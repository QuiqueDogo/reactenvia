import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EnviaB  from "./EnviaB";
import RegisterB  from "./RegisterB";

export default function Register() {
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
          <EnviaB  />
          <RegisterB />
         </View>   
      </LinearGradient>
    </View>
  );
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
});
