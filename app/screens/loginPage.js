import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header"
import t from "tcomb-form-native";
import formValidation from "../utils/Validation"
//FormSettings
const Form =t.form.Form;
import {LoginStruct,LoginOptions} from "../forms/Login"


export default class verifyPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        loginStruct: LoginStruct,
        loginOptions: LoginOptions,
        active: `${this.props.navigation.state.params.item}`,
        formData:{
          email:"",
          password:""
        }
      }
    }

    onChangeFormRegister = (data) => {
      this.setState({
        formData: data
      })
    }

    login = () =>{
      // this.props.navigation.navigate("homePage")
      console.log(this.state.formData)
    }

    static navigationOptions ={
      header:null
  }
    render(){
      const {loginStruct, loginOptions,active} = this.state 
      return(
        <View style={styles.containerRegister}>
          <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/>
            <View style={styles.division}>
              <View className="centerCard" style={{flex:1,width: "90%",position:"absolute",top:"-8%",alignItems: "center",flexDirection:"column",backgroundColor:"#fff",borderRadius:15,shadowColor: "#000",shadowOpacity: 0.46,shadowRadius: 11.14, elevation: 20,shadowOffset: {  width: 0,  height: 8,},
                            height: active == "login" ? (Platform.OS == "android") ? "55%" :"46%"  : "90%" ,
                          }}>
                <TabsSelection item="login"/>
                <View style={styles.formStyles}>
                    <Form 
                    onChange={(formValue)=> this.onChangeFormRegister(formValue)} ref="loginForm" type={loginStruct} options={loginOptions} value={this.state.formData} 
                    />			
                </View>			
                <Button
                    style={styles.buttonLoginFloating} title="Inicia Sesion" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }} containerStyle={styles.buttonStylesContainerLogin} iconRight iconContainerStyle={{ marginLeft: 0 }}
                    icon={{
                      name:"arrow-right",
                      type:"font-awesome",
                      size:19,
                      color:"white",
                    }}
                    // onPress={() => this.props.navigation.navigate('contRegisterPage')}
                    onPress={() => this.login()} 
                 />     
              </View>    
            </View>

        </View>
      )
    }
  }