import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import { Button , Text} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation"
//FormSettings
const Form =t.form.Form;
import {RegisterStruct,RegisterOptions} from "../forms/ContRegister"


export default class registerPage extends Component {
    constructor(props) {
     super(props);
      
     this.state =  {
       telefono :`${this.props.navigation.state.params.info.telefono}`,
       registerStruct: RegisterStruct,
       registerOptions: RegisterOptions,
       formData:{
         code1:"",
         code2:"",
         code3:"",
         code4:""
       }
      }
   }

   static navigationOptions ={
    header:null
    }
   render() {
    const {telefono, registerStruct, registerOptions} = this.state
     return (
             <View style={styles.containerRegister}>
                 <Header title="Verifica tu Teléfono" title2="Ingresa tu código de verificación"/>
                   <View style={styles.division}>
                      <View className="centerCard" style={styles.cardStyle}> 
                      <TabsSelection telefono={telefono}/>
                      <Text style={{color:"#02b2bc", letterSpacing: 1.6, fontSize:23, marginBottom:12}}>
                        {telefono}
                      </Text>
                      <View style={{width:"100%",}}>
                          <Form 
                          // onChange={formValue => this.onChangeFormRegister(formValue)}
                           ref="registerForm" type={registerStruct} options={registerOptions} value={this.state.formData} 
                          />			
                      </View>
                      <Button   style={styles.buttonFloating} title="Validar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttoncontRegister2} iconRight iconContainerStyle={{ paddingLeft: 20 }}
                              icon={{
                                name:"arrow-right",
                                type:"font-awesome",
                                size:19,
                                color:"white",
                              }}
                              onPress={() => this.props.navigation.navigate('verifyPage')}
                              // onPress={() => this.register()} 
                              />   
                        </View> 
                      {/* <Button title="vamos a verificar" onPress={ ()=> this.props.navigation.navigate("verifyPage")}></Button>  */}
                   </View>
             </View>
         );
     }
 }