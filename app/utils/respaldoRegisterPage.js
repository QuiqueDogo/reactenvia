import React, { Component } from 'react';
import {View, Platform,Modal,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Button, Icon, Text,Image, Input} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";
import t from "tcomb-form-native";
//FormSettings
const Form =t.form.Form;
import {RegisterStruct,RegisterOptions} from "../forms/Register"
import { CountrySelection } from 'react-native-country-list';
import * as Location from "expo-location";
import * as Permissions  from "expo-permissions"; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputForm from "../components/inputForm";
const customData = require("../utils/country.json");

export default class registerPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    modalVisible: false,
    selected:{
      name:"Selecciona Pais",
      callingCode:"",
      flag:"Aqui va la bandera",
      code:""
    },
    registerStruct: RegisterStruct,
    registerOptions: RegisterOptions,
    active: `${this.props.item}`,
    formData:{
      name:"",
      email:"",
    },
    number:"",
    formErrorMessage:"",
    errormessage:"",
    location:{
      coords:{
        latitude:"",
        longitude:""
      }
    },
    listCountry: customData,
    value:"",
    value2:""
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
            
               listCountry.forEach(element => {
                 if (element.code === countryCode.toUpperCase() ){
                    // console.log(element.name)
                    this.setState({ selected:{
                      name:element.name,
                      callingCode:element.callingCode,
                      flag:element.flag,
                      code:element.code
                    }})
                 }
               });

          })
          .catch((error) =>{
            console.error(error)});
 
  }
}


register = () => {
  console.log(this.state)
  //  const  {name,email,pais,telefono, password} = this.state.formData
  
  //  if(name !="" && email!="" && pais!="" && telefono !="" && password !=""){
  //    const validate = this.refs.registerForm.getValue();
    
  //    if(validate){
  //     console.log("todo bien en el registro")
      // this.props.navigation.navigate("contRegisterPage",{
      //   info: this.state.formData, number: this.state.number
      // })
  //     this.setState({
  //       formErrorMessage: ""
  //     })
  //    }else{
  //      console.log("todo mal en el registro")
  //      this.setState({ formErrorMessage: "Error en el correo electronico" })
  //     }
  //  }else{
  //   this.setState({ formErrorMessage: "LLene los campos..." })
  //  }


  
  //  console.log(this.state.formData)
}

handleText = (newText, state) =>{
  this.setState({
    [state] :newText
  })
} 


onChangeFormRegister = formValue =>{
  this.setState({
    formData:formValue
  });
}


onCountrySelection = (country) => {
  this.setState({selected: country});
  this.setState({modalVisible: false});

}

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

static navigationOptions ={
  header:null
}

OnChangeNumber(value,code){
  this.setState({number: "+"+ code  + value})
}



render() {
  const {registerStruct, registerOptions,formErrorMessage,selected,country_code} = this.state
  const {name,callingCode,flag} = this.state.selected
  return (
         <View style={styles.containerRegister}> 
              <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/>
                <View style={styles.division}>
                    <View className="centerCard" style={{flex:1,width: "90%",position:"absolute",top:"-8%",alignItems: "center",flexDirection:"column",backgroundColor:"#fff",borderRadius:15,shadowColor: "#000",shadowOpacity: 0.46,shadowRadius: 11.14,elevation: 20,shadowOffset: {width: 0,height: 8,},height: (Platform.OS=="android") ? "95%" :"90%" 
                      }}>
                        <TabsSelection item="register" />
                        <View style={styles.formStyles}>
                          {/* <Form 
                          onChange={formValue => this.onChangeFormRegister(formValue)} ref="registerForm" type={registerStruct} options={registerOptions} value={this.state.formData} 
                          /> */}
                          <TouchableOpacity style={styles.inputStyles} onPress={() => {this.setModalVisible(true);}}>
                            <Text style={{color:"#38b3b9",fontSize:15, fontWeight:"200"}}>{name}</Text>
                          </TouchableOpacity>

                          <View style={styles.phoneInput}>
                            <View style={styles.codePhone}>
                              <Image style={{width:35, height:25, marginRight:10}} source={{uri:flag}} />
                              <Text style={{color:"#38b3b9",fontSize:15, fontWeight:"200"}}>+{callingCode}</Text>
                            </View>
                            <Input maxLength={10} inputContainerStyle={{width:"60%", borderBottomWidth:0}} inputStyle={{color:"#38b3b9",fontSize:15, fontWeight:"200"}} onChangeText={value => this.OnChangeNumber(value,callingCode)} />
                          </View>
                            <InputForm label="Contraseña" value={this.state.value} onChangeText={text =>this.handleText(text,"value")} />
                            <InputForm label="Contraseña" value={this.state.value2} onChangeText={text =>this.handleText(text,"value2")} />
                        </View>

                            <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            >
                              <View style={{height:"100%",paddingTop:"7%",}}>
                                <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                              </View>
                            </Modal>    
                           
                          <Text style={{color:"red", marginTop:5}}>{formErrorMessage}</Text>
                            <Button
                            style={styles.buttonFloating} title="Registrarse" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }} containerStyle={styles.buttonStylesContainerRegister} iconRight iconContainerStyle={{ marginLeft: 0 }}
                            icon={{
                              name:"arrow-right",
                              type:"font-awesome",
                              size:19,
                              color:"white",
                            }}
                            onPress={()=>this.register()} 
                            />   
                    </View>
                </View>
          </View> 
      );
  }
}