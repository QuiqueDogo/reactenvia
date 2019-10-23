import React, { Component } from 'react';
import {View, Platform, KeyboardAvoidingView, Modal, TextInput} from 'react-native';
import { Button , Text} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import ButtonStyles from "../../assets/css/buttonStyles";
import Header from "../components/Header";
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        time:"seg",
        visibleModal:false
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
      this.setState({timer:"No recibi el codigo"});
      this.setState({time:""});
    }
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  setModalVisible(visible) {
    this.setState({visibleModal: visible});
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
                        <Text style={styles.numberFormat}>{numberFormat}</Text>
                        <View style={{flex:1,width:"100%",}}>
                          <View style={{width:"100%",borderWidth:1,height:100,flexDirection:"row"}}>
                            <TextInput />
                            <TextInput />
                            <TextInput />
                          </View>
                          {timer != "No recibi el codigo" &&
                            <Text style={styles.timer}>{timer+" "+time}</Text>
                          }
                          {timer === "No recibi el codigo" &&
                            <TouchableOpacity style={styles.touchableCode} onPress={ () => this.setState({ visibleModal: true })}>
                                <Text style={{color:"#02b2bc"}}>No recibi el codigo</Text>
                            </TouchableOpacity>
                          }
                        </View>
                      </View>
                        {/* <Button   style={styles.buttonFloating} title="Validar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttoncontRegister2} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={() => this.props.navigation.navigate('verifyPage')}
                              />    */}
                     <Modal animationType="slide" transparent={true} visible={this.state.visibleModal} onRequestClose={() => {this.setModalVisible(false);}}>
                       <View style={{flex:1,justifyContent:"flex-end",alignItems:"stretch",backgroundColor: 'rgba(0,0,0,0.3)'}}>
                          <View style={{backgroundColor:"#fff", marginBottom:30, width:"95%", marginLeft:"auto",marginRight:"auto", borderRadius:10}}>
                              <TouchableOpacity style={ButtonStyles.touchableOption}>
                                <Text style={ButtonStyles.textOption}>Seleccione una Opcion</Text>
                              </TouchableOpacity>
                              <Button buttonStyle={ButtonStyles.button2and3} titleStyle={{color:"#007aff"}} title="Reenviar Codigo" />
                              <Button buttonStyle={ButtonStyles.button2and3} titleStyle={{color:"#56a7ff"}} title="Llamar" />
                              <Button buttonStyle={ButtonStyles.buttonBack} titleStyle={{color:"#ff3b30"}} title="Cancelar" onPress={ () => this.setState({ visibleModal:false })}/>
                          </View>  
                      </View>
                     </Modal>
                   </View>
             </View>
      </KeyboardAvoidingView>
         );
     }
 }