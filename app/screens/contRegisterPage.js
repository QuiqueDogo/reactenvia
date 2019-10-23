import React, { Component } from 'react';
import {View, Platform, KeyboardAvoidingView} from 'react-native';
import { Button , Text} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import Header from "../components/Header";

export default class registerPage extends Component {
    constructor(props) {
     super(props);
    //  const data = this.props.navigation.state.params.info
    //  console.log(data)
      this.state =  {
        // email :`${data.email}`,
        // name :`${data.name}`,
        // number :`${data.number}`,
        number :"+514431305931",
        // password :`${data.password}`,
        timer: 30,
        time:"seg"
      };
   };

  componentDidMount(){
     this.interval = setInterval(
       () => this.setState((prevState) => ({timer:prevState.timer -1  })),
       1000
     );
  }
   
  componentDidUpdate(){
    if(this.state.timer === 0){ 
      clearInterval(this.interval);
      this.setState({timer:"No recibi el codigo"})
      this.setState({time:""})
    }
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }

   static navigationOptions ={
    header:null,
    }
   render() {
    //  const {email,name,number,password} = this.state
     const {number,timer,time} = this.state;
     const numberFormat = number.substring(0,3)+ " " + number.substring(3,6) + " " + number.substring(6,9) + " " + number.substring(9,13);
     return (
      <KeyboardAvoidingView style={styles.containerRegister} behavior="padding">
             <View style={styles.containerRegister}>
                 <Header title="Verifica tu Teléfono" title2="Ingresa tu código de verificación"/>
                   <View style={styles.section2}>
                      <View  style={styles.cardStyleCont}> 
                        <TabsSelection telefono={number}/>
                        <Text style={{color:"#02b2bc", letterSpacing: 1.2, fontSize:23, marginBottom:12}}>{numberFormat}</Text>
                        {timer != "No recibi el codigo" &&
                          <Text style={{color:"#02b2bc", letterSpacing: 1.2, fontSize:23, marginBottom:12}}>{timer+" "+time}</Text>
                        }
                        {timer === "No recibi el codigo" &&
                          <Button title="No" style={{color:"#02b2bc", letterSpacing: 1.2, fontSize:23, marginBottom:12}}>{timer}</Button>
                        }
                      </View>
                        {/* <Button   style={styles.buttonFloating} title="Validar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttoncontRegister2} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={() => this.props.navigation.navigate('verifyPage')}
                              />    */}
                     
                   </View>
             </View>
      </KeyboardAvoidingView>
         );
     }
 }