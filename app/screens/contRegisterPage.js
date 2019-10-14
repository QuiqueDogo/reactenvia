import React, { Component } from 'react';
import {View} from 'react-native';
import { Button , Text} from 'react-native-elements';
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
 
   }
   static navigationOptions ={
    header:null
    }
   render() {
    
     return (
             <View style={styles.containerRegister}>
                 <Header title="Verifica tu Teléfono" title2="Ingresa tu código de verificación"/>
                   <View style={styles.division}>
                    <TabsSelection item="login"/>
                    <View style={styles.formStyles}>
                    </View>
                    <Text>Hola desde la continuacion de registro</Text>   
                    <Button title="vamos a verificar" onPress={ ()=> this.props.navigation.navigate("verifyPage")}></Button> 
                    <Button title="Atras" onPress={ ()=> this.props.navigation.goBack()}></Button>   
                   </View>
             </View>
         );
     }
 }