import React, { Component } from 'react';
import {View, Platform, KeyboardAvoidingView, Modal, TextInput} from 'react-native';
import { Button , Text} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import ButtonStyles from "../../assets/css/buttonStyles";
import Header from "../components/Header";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [
  'Cancel',
  'Apple',
  'Banana',
  'Watermelon',
  'Durian'
]
const title = 'Which one do you like?'
const message = 'In botany, a fruit is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering.'


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
        timer: 2,
        time:"seg",
        visibleModal:false,
        selected:""
      };
      this.handlePress = this.handlePress.bind(this)
      this.showActionSheet = this.showActionSheet.bind(this)
      this.focusNextField = this.focusNextField.bind(this);
      this.inputs = {};
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
  
  showActionSheet () {
    this.ActionSheet.show()
  }

  handlePress (buttonIndex) {
    this.setState({ selected: buttonIndex })
  }
  focusNextField(id) {
    this.inputs[id].focus();
  }


   render() {
    //  const {email,name,number,password} = this.state
     const {number,timer,time} = this.state;
     const numberFormat = number.substring(0,3)+ " " + number.substring(3,6) + " " + number.substring(6,9) + " " + number.substring(9,13);
     return (
      // <KeyboardAvoidingView style={styles.containerRegister} behavior="padding">
             <View style={styles.containerRegister}>
                 <Header title="Verifica tu Teléfono" title2="Ingresa tu código de verificación"/>
                   <View style={styles.section2}>
                      <View  style={styles.cardStyleCont}> 
                        <TabsSelection telefono={number}/>
                        <Text style={styles.numberFormat}>{numberFormat}</Text>
                        <View style={{flex:1,width:"100%",}}>
                          <View style={{width:"100%",height:100,flexDirection:"row", }}>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['one'] = input; }} onChangeText={() => { this.focusNextField('two'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['two'] = input; }} onChangeText={() => { this.focusNextField('three'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['three'] = input; }} onChangeText={() => { this.focusNextField('four'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['four'] = input; }} onChangeText={() => { this.focusNextField('five'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['five'] = input; }} onChangeText={() => { this.focusNextField('six'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['six'] = input; }} onChangeText={() => { this.focusNextField('seven'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" } secureTextEntry={true} style={styles.inputText} ref={ input => { this.inputs['seven'] = input; }}/>
                          </View>
                          {timer != "No recibi el codigo" &&
                            <Text style={styles.timer}>{timer+" "+time}</Text>
                          }
                          {timer === "No recibi el codigo" &&
                            <TouchableOpacity style={styles.touchableCode} onPress={this.showActionSheet}>
                                <Text style={{color:"#02b2bc"}}>No recibi el codigo</Text>
                            </TouchableOpacity>
                          }
                        </View>
                        <Button title="Validar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttoncontRegister2} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={() => this.props.navigation.navigate('verifyPage')}
                              />   
                      </View>
                    
                    <ActionSheet
                      ref={o => { this.ActionSheet = o }}
                      title={title}
                      message={message}
                      options={options}
                      cancelButtonIndex={CANCEL_INDEX}
                      destructiveButtonIndex={DESTRUCTIVE_INDEX}
                      onPress={this.handlePress}
                    />
                   </View>
             </View>
      // </KeyboardAvoidingView>
         );
     }
 }