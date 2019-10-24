import React, { Component } from 'react';
import {View,Modal,TouchableOpacity,KeyboardAvoidingView, ScrollView, TextInput} from 'react-native';
import { Button, Text,Image} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import Header from "../components/Header";
import { CountrySelection } from 'react-native-country-list';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"


export default class registerPage extends Component {
  constructor(props) {
  super(props);
  const country = this.props.navigation.state.params;
  this.state = {
    modalVisible: false,
    selected:{
      name:(!country.name) ? "Selecciona Pais" :country.name ,
      callingCode:(!country.callingCode) ? "" :country.callingCode ,
      flag:(!country.flag) ? "no" :country.flag ,
      code: (!country.code) ? "" : country.code 
    },
    number:"",
    formErrorMessage:"",
    name:"",
    email:"",
    password:""
  }
};


register = () => {
   const  {number,name,email,password,} = this.state;
   const  {nameCountry} = this.state.selected;
  
  //  if(name !="" && email!="" && nameCountry!="Selecciona Pais" && number !="" && password !=""){
  //       if (email.includes("@")) {
  //         this.setState({ formErrorMessage: "" });
          this.props.navigation.navigate("contRegisterPage",{
            info:{
              number,
              name,
              email,
              password,
            }, 
          });
  //       }else{
  //         this.setState({ formErrorMessage: "Correo invalido" });
  //       }
  // }else{
  //    this.setState({ formErrorMessage: "Falta rellenar Campos" });
  //  }
}

handleText = (newText, state) =>{
  this.setState({
    [state] :newText
  });
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
  this.setState({number: "+"+ code  + value});
}

render() {
  const {formErrorMessage,selected,country_code} = this.state;
  const {name,callingCode,flag} = this.state.selected;

  return (
    <KeyboardAvoidingView style={styles.containerRegister} behavior="padding">
 
        <View style={styles.containerRegister}>
            <View style={styles.containerRegister}>

            <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/> 
              <View style={styles.section2}>
                <View style={styles.cardStyle}>
                  <TabsSelection item="register"/>
                  <Text style={{color:"red",fontWeight:"200", fontSize:13}}>{formErrorMessage}</Text>
                  <ScrollView style={{width:"100%",marginBottom:40}}>
                          <InputForm  label="Nombre" value={this.state.name} onChangeText={text =>this.handleText(text,"name")} />
                          <InputForm label="Email" value={this.state.email} onChangeText={text =>this.handleText(text,"email")} />
                          <ButtonModal title={name} onPress={() => {this.setModalVisible(true);}} />

                          <View style={styles.phoneInput}>
                            <View style={styles.codePhone}>
                              <Image style={styles.flagStyle} source={{uri:flag}} />
                              <Text style={styles.codeStyle}>+{callingCode}</Text>
                            </View>
                            <TextInput placeholder="Telefono" placeholderTextColor="#38b3b9" returnKeyType="next" keyboardType={'numeric'} maxLength={10} inputContainerStyle={{width:"60%", borderBottomWidth:0}} style={styles.styleNumber} onChangeText={value => this.OnChangeNumber(value,callingCode)} />
                          </View>

                          <InputForm label="Contraseña" text="true"value={this.state.password} onChangeText={text =>this.handleText(text,"password")} />
                          <Text style={styles.textTerms}>Al Continuar aceptas los Terminos y Condiciones </Text>
                  </ScrollView>
                    <Button containerStyle={styles.buttonFloating} title="Registrarse" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }}  iconRight iconContainerStyle={{ marginLeft: 0 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={()=>this.register()} />   
                </View>

                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                        <View style={{height:"100%",paddingTop:"7%",}}>
                          <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                        </View>
                    </Modal>  

              </View>
            </View>
        </View>
</KeyboardAvoidingView>
      );
  }
}