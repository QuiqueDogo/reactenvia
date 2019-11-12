import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from "expo-location";
import * as Permissions  from "expo-permissions"; 
import styles from "../../assets/css/stylesMain";
const customData = require("../utils/country.json");


 export default class mainPage extends Component{
    constructor(props) {
      super(props);
      this.state={
        location:{
          coords:{
            latitude:"",
            longitude:""
          }
        },
        listCountry: customData,
      }
    }

    componentDidMount(){
      this._getLocation();
    }
    
    _getLocation = async () =>{
      const {status} = await Permissions.askAsync(Permissions.LOCATION);
    
      if(status !== "granted"){
        console.log('PERMISION NOT GRANTED');
    
        this.setState({ errormessage: "PERMISOS NO OTORGADOS"})
      }else{
    
    
    
      const location = await Location.getCurrentPositionAsync()
    
      this.setState({location})
      
      const latitude = this.state.location.coords.latitude
      const longitude = this.state.location.coords.longitude
      
        return fetch("https://nominatim.openstreetmap.org/reverse?lat="+latitude+"&lon="+longitude+"&format=json")
                .then((response) => response.json())
                .then((responseJson) => {
                      const countryCode  = responseJson.address.country_code
                      const listCountry = this.state.listCountry
                      listCountry.find(element =>{
                        if(element.code === countryCode.toUpperCase()){
                            this.setState({name:element.name,callingCode:element.callingCode,flag:element.flag,code:element.code})
                            console.log("listo")
                          }
                        })              
                })
                .catch((error) =>{ console.error(error)});
                
              
       }
    }
    static navigationOptions ={
        header:null
    }
    render(){
      const {name,callingCode,flag,code}=this.state
        return (
        <View style={styles.containerMain}>     
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.9,0.1]} end={[0.2,0.8]} style={styles.background}>
              <View style={styles.containerLogo}>
                <Image style={styles.logoImage} source={require("../../assets/img/envialogo.png")} />
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
                  this.props.navigation.navigate('LoginPage',{
                    item: "login",
                  })
                }>
                  <Text style={styles.submitText}> Iniciar Sesión </Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ffffff00" style={styles.submitRegister} onPress={() =>
                    this.props.navigation.navigate('RegisterPage',{
                      name,callingCode,flag,code
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


