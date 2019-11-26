import React, { Component } from 'react';
import {View,Modal,TouchableOpacity,KeyboardAvoidingView, ScrollView, TextInput, TouchableWithoutFeedback, Platform} from 'react-native';
import { Button, Text,Image} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import Header from "../components/Header";
import { CountrySelection } from 'react-native-country-list';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal";
import i18n from "../utils/i18n";
import { Linking } from 'expo';


export default class registerPage extends Component {
  constructor(props) {
  super(props);
  const country = this.props.navigation.state.params;
  this.ChangeKeyBoard = this.ChangeKeyBoard.bind(this)
  this.state = {
    modalVisible: false,
    selected:{
      name:(!country.name) ? i18n.t("labels.country") :country.name ,
      callingCode:(!country.callingCode) ? "" :country.callingCode ,
      flag:(!country.flag) ? "no" :country.flag ,
      code: (!country.code) ? "" : country.code 
    },
    number:"",
    formErrorMessage:"",
    name:"",
    email:"",
    password:"",
    valueKeyborad:0
  }
};


register = () => {
   const  {number,name,email,password,} = this.state;
   const  {nameCountry} = this.state.selected;
  
   if(name !="" && email!="" && nameCountry!="Selecciona Pais" && number !="" && password !=""){
        if (email.includes("@")) {
          this.setState({ formErrorMessage: "" });
          this.props.navigation.navigate("contRegisterPage",{
            info:{
              number,
              name,
              email,
              password,
            }, 
          });
        }else{
          this.setState({ formErrorMessage: "Correo invalido" });
        }
    }else{
      this.OnChangeValue();
    }
}

OnChangeValue = () => {
  this.user.checkvalue() // para verificar que cada campo no este vacio (solo funciona con el componente de inputForm.js)
  this.email.checkvalue() 
  this.pass.checkvalue() 
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

ChangeKeyBoard(value ){
  this.setState({valueKeyborad:value})
}



render() {
  const {formErrorMessage,selected,country_code} = this.state;
  const {name,callingCode,flag} = this.state.selected;
  const valueKeyborad = this.state.valueKeyborad;

  return (
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad} >
        <View style={styles.containerRegister}>
            <View style={styles.containerRegister}>
            <Header title={i18n.t("LoginPage.title")} title2={i18n.t("LoginPage.title2")}/>
              <View style={styles.section2}>
                <View style={styles.cardStyleGood}>
                  <TabsSelection item="register"/>
                  <Text style={{color:"red",fontWeight:"200", fontSize:13}}>{formErrorMessage}</Text>
                  <ScrollView style={{width:"100%",marginBottom:40}}>
                          <InputForm onRef={ref => (this.user = ref)} label={i18n.t("labels.user")} value={this.state.name} onChangeText={text =>this.handleText(text,"name")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)} />
                          <InputForm onRef={ref => (this.email = ref)} label={i18n.t("labels.email")} value={this.state.email} onChangeText={text =>this.handleText(text,"email")} ChangeKeyBoard={value => this.ChangeKeyBoard(-210)}/>
                          <ButtonModal title={name} onPress={() => {this.setModalVisible(true);}} />
                          <View style={styles.phoneInput}>
                            <View style={styles.codePhone}>
                              <Image style={styles.flagStyle} source={{uri:flag}} />
                              <Text style={styles.codeStyle}>+{callingCode}</Text>
                            </View>
                            <TextInput placeholder={i18n.t("labels.phone")} placeholderTextColor="#38b3b9" returnKeyType="next" keyboardType='numeric' maxLength={10} inputContainerStyle={{width:"60%", borderBottomWidth:0}} style={styles.styleNumber} onChangeText={value => this.OnChangeNumber(value,callingCode)} onFocus={() => this.setState({valueKeyborad:-190})} />
                          </View>

                          <InputForm onRef={ref => (this.pass = ref)} label={i18n.t("labels.password")} text="true"value={this.state.password} onChangeText={text =>this.handleText(text,"password")} ChangeKeyBoard={value => this.ChangeKeyBoard(-140)} />
                          <View style={{flexDirection:"row", width:"100%", justifyContent:"center" }}>
                            <Text style={[styles.textTerms,{color:"#bdbdbd"}]}>{i18n.t("labels.accept")}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=2NLAUARFWrc')} >
                              <Text style={[styles.textTerms,{color:"#02b2bc"}]}>{i18n.t("labels.terms")}</Text>
                            </TouchableOpacity>
                          </View>
                  </ScrollView>
                    <Button containerStyle={styles.buttonFloating} title={i18n.t("buttons.Register")} buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }}  iconRight iconContainerStyle={{ marginLeft: 0 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} 
                    onPress={()=>this.register()} 
                    />   
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