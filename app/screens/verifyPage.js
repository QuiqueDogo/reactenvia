import React, { Component } from 'react';
import { Text, View,Platform, ScrollView} from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";
import  TabsSelection  from "../components/TabsSelection";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation"
//FormSettings
const Form =t.form.Form;
import {VerifyStruct,VerifyOptions} from "../forms/Verify"


export default class verifyPage extends Component{
  constructor(props) {
    super(props);

    this.state={
      verifyStruct: VerifyStruct,
      verifyOptions: VerifyOptions,
      formData:{
        empresa: "",
        calle: "",
        numero: "",
        codigoPostal: "",
        colonia: "",
        ciudad: "",
        Estado: "",
        enviosMes: "",
        info: "",
      }
    }
  }
  static navigationOptions ={
    header:null
  }
  render(){
    const {verifyStruct,verifyOptions} = this.state
    return(
      <View style={styles.containerRegister}>
      <Header title="Continuemos" title2="Completa la siguiente informacion para crear tu cuenta"/>
           <Button title="Atras" onPress={ ()=> this.props.navigation.goBack()}></Button>   
        <View style={styles.division}>
           <TabsSelection item="login"/>
           <View className="centerCard" style={styles.cardVerify}> 
            <ScrollView style={styles.scrollStyle}>
            <Form 
            // onChange={formValue => this.onChangeFormRegister(formValue)}
              ref="registerForm" type={verifyStruct} options={verifyOptions} value={this.state.formData} 
            />		
            </ScrollView>
           </View> 
        </View>
           <Button title="vamos a verificar" onPress={ ()=> this.props.navigation.navigate("homePage")}></Button> 
  </View>
    )
  }
}