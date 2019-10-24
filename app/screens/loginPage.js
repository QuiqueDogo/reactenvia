import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesLogin";
import Header from "../components/Header"
import InputFrom from "../components/inputForm";


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
      this.props.navigation.navigate("homePage")
      // console.log(this.state.formData)
    }

    static navigationOptions ={
      header:null
  }
    render(){
      const {active} = this.state 
      return(
        <View style={styles.containerRegister}>
          <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y 2rapido"/>
            <View style={styles.division}>
              <View className="centerCard" style={styles.cardLogin}>
                <TabsSelection item="login"/>
                <View style={styles.formStyles}>
                  	<InputFrom label="Usuario" value={this.state.user} onChangeText={text => this.onChangeLogin(text,"user")}/>
                  	<InputFrom label="Contraseña" text="true" value={this.state.password} onChangeText={text => this.onChangeLogin(text,"password")}/>
                </View>			
                <Button title="Inicia Sesion" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }} containerStyle={styles.buttonStylesContainerLogin}   iconRight iconContainerStyle={{ marginLeft: 0 }} icon={{ name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={() => this.login()} 
                    // onPress={() => this.props.navigation.navigate('contRegisterPage')}
                 />     
              </View>    
            </View>

        </View>
      )
    }
  }