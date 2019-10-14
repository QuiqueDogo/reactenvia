import React, { Component } from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation"
//FormSettings
const Form =t.form.Form;
import {RegisterStruct,RegisterOptions} from "../forms/Register"


export default class registerPage extends Component {
    constructor(props) {
     super(props);
     this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions
     }
   }
   static navigationOptions ={
    header:null
    }
   render() {
     const {registerStruct, registerOptions} = this.state
     return (
             <View style={styles.containerRegister}>
                 <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/>
                   <View style={styles.division}>
                    <TabsSelection item="register"/>
                    <View style={styles.formStyles}>
                      <Form 
                      ref="registerFomr" type={registerStruct} options={registerOptions}
                      />			
                    </View>
                    <Button  onPress={() => this.props.navigation.navigate('contRegisterPage')} />   
                    <Button  title="atras" onPress={() => this.props.navigation.goBack()} />      
                   </View>
             </View>
         );
     }
 }