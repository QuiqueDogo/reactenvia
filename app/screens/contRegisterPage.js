import React, { Component } from 'react';
import {View, Platform, KeyboardAvoidingView, Modal, TextInput} from 'react-native';
import { Button , Text} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import ButtonStyles from "../../assets/css/buttonStyles";
import Header from "../components/Header";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'


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
      selected:"",
      loading:false,
      disabled:true,
      colorButton: "#999999",
      textButton: "Validar",
      iconName:"arrow-right"
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
      this.ActionSheet.show();
    }
    
    handlePress (buttonIndex) {
      this.setState({ selected: buttonIndex });
      if(buttonIndex == 1){
        console.log("mensaje loco")
      }else if(buttonIndex == 2){
        console.log("llamar loco")
      }

    }
    focusNextField(id) {
      this.inputs[id].focus();
    }

    validation(){
      if(this.state.textButton == "Continuar"){
        this.props.navigation.navigate("verifyPage");
      } else {
        this.setState({loading:true})
        setInterval(() => {
          this.setState({loading:false,textButton:"Continuar", iconName:"check-circle"})
        }, 3000);
      }
    }
    
    
    render() {
      //  const {email,name,number,password} = this.state
      const CANCEL_INDEX = 0
      const DESTRUCTION_INDEX= 2
      const options = [
        <Text style={{color: '#fe3c31'}}>Cancelar</Text>,
        <Text style={{color: '#1583ff'}} >Reenviar Codigo</Text>,
        <Text style={{color: '#087fff'}} >Llamar</Text>
      ]
      const title = 'Selecciona una opcion';
      const {number,timer,time,loading, colorButton, disabled,textButton, iconName} = this.state;
      const numberFormat = number.substring(0,3)+ " " + number.substring(3,6) + " " + number.substring(6,9) + " " + number.substring(9,13);
      return (
        <View style={styles.containerRegister}>
                 <Header title="Verifica tu Teléfono" title2="Ingresa tu código de verificación"/>
                   <View style={styles.section2}>
                      <View  style={styles.cardStyleCont}> 
                        <TabsSelection telefono={number}/>
                        <Text style={styles.numberFormat}>{numberFormat}</Text>
                        <View style={{flex:1,width:"100%", alignItems:"center",}}>
                          <View style={{width:"70%",height:100,flexDirection:"row",  }}>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['one'] = input; }} onChangeText={() => { this.focusNextField('two'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['two'] = input; }} onChangeText={() => { this.focusNextField('three'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['three'] = input; }} onChangeText={() => { this.focusNextField('four'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['four'] = input; }} onChangeText={() => { this.focusNextField('five'); }}/>
                          </View>
                          <View style={{width:"55%",height:50,flexDirection:"row", }}>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['five'] = input; }} onChangeText={() => { this.focusNextField('six'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['six'] = input; }} onChangeText={() => { this.focusNextField('seven'); }}/>
                            <TextInput maxLength={1} blurOnSubmit={false} returnKeyType={ "next" }  style={styles.inputText} ref={ input => { this.inputs['seven'] = input; }} onChangeText={() => this.setState({disabled:false, colorButton:"#02b2bc"})}/>
                          </View>
                          {timer != "No recibi el codigo" &&
                          <View style={styles.touchableCode}>
                            <Text style={styles.timer}>{timer+" "+time}</Text>
                          </View>
                          }
                          {timer === "No recibi el codigo" &&
                          <View style={styles.touchableCode}>
                            <TouchableOpacity  onPress={this.showActionSheet}>
                                <Text style={{color:"#02b2bc"}}>No recibi el codigo</Text>
                            </TouchableOpacity>
                          </View>
                          }
                        </View>
                        <Button title={textButton} disabled={disabled} loading={loading} buttonStyle={{
                          borderWidth: 1,
                          borderColor: `${colorButton}`,
                          borderRadius: 30,
                          backgroundColor:`${colorButton}`,
                          height:60,
                          width:250,}} 
                          titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttoncontRegister2} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{name:iconName, type:"font-awesome", size:19, color:"white",}} onPress={() => this.validation()}
                              ><Text>Hola</Text></Button>   
                      </View>
                    
                    <ActionSheet
                      ref={o => { this.ActionSheet = o }}
                      title={title}
                      options={options}
                      cancelButtonIndex={CANCEL_INDEX}
                      destructiveButtonIndex={DESTRUCTION_INDEX}
                      onPress={(index) => this.handlePress(index)}
                    />
                   </View>
             </View>
         );
     }
 }