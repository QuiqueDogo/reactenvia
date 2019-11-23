import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesLogin";
import Header from "../components/Header"
import InputFrom from "../components/inputForm";
import base64 from 'react-native-base64'
import i18n from "../utils/i18n";


export default class verifyPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        active: `${this.props.navigation.state.params.item}`,
        user:"",
        password:"",
      }
    }

    onChangeLogin = (newText, state) => {
      this.setState({
        [state]: newText
      })
    }

    login = () =>{
      this.props.navigation.navigate("HomePage");
      console.log("que pedo loco")
    }

    ChangeKeyBoard(value ){
      this.setState({valueKeyborad:value})
    }
    

  loginq = async () => {
    //puede usar btoa para encode y atob apra decode en 64
    let ruta = "https://envia-token-stage.herokuapp.com/login"
    let username = "osgff8@gmail.com";
    let password = "12345678";
    let params = {
      method:"POST",
      headers:{
        "Authorization": "Basic "+base64.encode(`${username}:${password}`),
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "app_id": "client",
        "token_type": "1"
      }),
      mode:"cors"
    };
    fetch(ruta, params).then(response => response.text().then(data => console.log(data)).catch(error => console.log(error))).catch(error => console.log(error))
  }
    
    static navigationOptions ={
      header:null
  }
    render(){
      const {active} = this.state 
      return(
        <View style={styles.containerRegister}>
          <Header title={i18n.t("LoginPage.title")} title2={i18n.t("LoginPage.title2")}/>
            <View style={styles.division}>
              <View className="centerCard" style={styles.cardLogin}>
                <TabsSelection item="login"/>
                <View style={styles.formStyles}>
                  	<InputFrom label={i18n.t("labels.user")} value={this.state.user} onChangeText={text => this.onChangeLogin(text,"user")} ChangeKeyBoard={value => this.ChangeKeyBoard(0)}/>
                  	<InputFrom label={i18n.t("labels.password")} text="true" value={this.state.password} onChangeText={text => this.onChangeLogin(text,"password")} ChangeKeyBoard={value => this.ChangeKeyBoard(0)}/>
                </View>			
                <Button title={i18n.t("buttons.Login")} buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }} containerStyle={styles.buttonStylesContainerLogin}   iconRight iconContainerStyle={{ marginLeft: 0 }} icon={{ name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={() => this.login()} 
                    // onPress={() => this.props.navigation.navigate('contRegisterPage')}
                 />     
              </View>    
            </View>

        </View>
      )
    }
  }