import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import { Button, Icon, Text} from 'react-native-elements';
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
      registerOptions: RegisterOptions,
      active: `${this.props.item}`,
      formData:{
        name:"",
        email:"",
        pais:"",
        telefono:"", 
        password:""
      },
      formErrorMessage:""
     }

   }

   register = () => {
    //  console.log(this.state.formData)
    //  const  {name,email,pais,telefono, password} = this.state.formData
     
    //  if(name !="" && email!="" && pais!="" && telefono !="" && password !=""){
    //    const validate = this.refs.registerForm.getValue();
       
    //    if(validate){
    //     console.log("todo bien en el registro")
        this.props.navigation.navigate("contRegisterPage",{
          info: this.state.formData
        })
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

   onChangeFormRegister = formValue =>{
     this.setState({
       formData:formValue
     })
   }
   
   static navigationOptions ={
    header:null
    }

   render() {
     const {registerStruct, registerOptions,active,formErrorMessage} = this.state
     return (
             <View style={styles.containerRegister}>
                 <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/>
                   <View style={styles.division}>
                      <View className="centerCard" style={{flex:1,width: "90%",position:"absolute",top:"-8%",alignItems: "center",flexDirection:"column",backgroundColor:"#fff",borderRadius:15,shadowColor: "#000",shadowOpacity: 0.46,shadowRadius: 11.14,elevation: 20,
                          shadowOffset: {
                            width: 0,
                            height: 8,
                          },
                          height: active === "login" ? "50%" : (Platform.OS=="android") ? "95%" :"80%" ,
                        }}>
                          <TabsSelection item="register" />
                          <View style={styles.formStyles}>
                            <Form 
                            onChange={formValue => this.onChangeFormRegister(formValue)} ref="registerForm" type={registerStruct} options={registerOptions} value={this.state.formData} 
                            />			
                          </View>
                            <Text style={{color:"red", marginTop:5}}>{formErrorMessage}</Text>
                              <Button
                              style={styles.buttonFloating} title="Registrarse" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }} containerStyle={styles.buttonStylesContainerRegister} iconRight iconContainerStyle={{ marginLeft: 0 }}
                              icon={{
                                name:"arrow-right",
                                type:"font-awesome",
                                size:19,
                                color:"white",
                              }}
                              // onPress={() => this.props.navigation.navigate('contRegisterPage')}
                              onPress={() => this.register()} 
                              />   
                      </View>
                   </View>
             </View>
         );
     }
 }