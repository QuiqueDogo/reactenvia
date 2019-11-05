import React, { Component } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform,Modal} from 'react-native';
import InputForm from "../components/inputForm";
import styles from "../../assets/css/stylesVerify";
import Header from "../components/Header";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";
import { Button } from 'react-native-elements';

export default class verifyPage extends Component{
  constructor(props) {
    super(props);

    this.state={
        empresa: "",
        calle: "",
        numero: "",
        codigoPostal: "",
        colonia: "",
        ciudad: "",
        Estado: "",
        enviosMes: "",
        info: "",
        modalVisible:false,
        stateCountry:"Estado",
        countryName:"Mexico",
        sends:"¿Cuantos Envios realiza por mes?",
        howto:"¿Como te enteraste de nosotros?",
        modal:"",
        valueKeyborad: -170
    }
    this.closeModal= this.closeModal.bind(this)
    this.ChangeKeyBoard = this.ChangeKeyBoard.bind(this)
  }
  static navigationOptions ={
    header:null,
  }
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }

  onViewModal = (modal) => {
    this.setState({modal:modal})
    this.setState({modalVisible:true})
  }

  closeModal(value,state) {
    this.setState({[state]:value})
    this.setState({modalVisible:false})
  }

  setModalVisible(value){
    this.setState({modalVisible:value})
  }

  ChangeKeyBoard(value ){
    this.setState({valueKeyborad:value})
  }
  

  render(){
    const { stateCountry,countryName,modal,sends,howto, valueKeyborad} =this.state
    const verticalNumber = (Platform.OS == "android") ? 0 : -250;
    return(
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad} >  
      <View style={styles.containerRegister}>
       <Header title="Continuemos" title2="Completa la siguiente informacion para crear tu cuenta"/>
        <View style={styles.section2}>
           <View style={styles.cardVerify}> 
            <ScrollView style={styles.scrollStyle}>
           		<InputForm label="Empresa" value={this.state.empresa} onChangeText={text => this.onChangeVerify(text,"empresa")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)} />
               <Text style={styles.textStyle}>Direccion</Text>
           		<InputForm label="Calle" value={this.state.calle} onChangeText={text => this.onChangeVerify(text,"calle")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)}/>
              <View style={styles.CPandNumber}>
                <InputForm label="Numero" size="middle" value={this.state.numero} onChangeText={text => this.onChangeVerify(text,"numero")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)}/>
                <InputForm label="Codigo Postal" size="middle" value={this.state.codigoPostal} onChangeText={text => this.onChangeVerify(text,"codigoPostal")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)}/>
              </View>
           		<InputForm label="Colonia" value={this.state.colonia} onChangeText={text => this.onChangeVerify(text,"colonia")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)}/>
           		<InputForm label="Ciudad" value={this.state.ciudad} onChangeText={text => this.onChangeVerify(text,"ciudad")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)}/>
           	  <ButtonModal title={stateCountry} onPress={()=> this.onViewModal("state")}/>
              <Modal animationType="fade" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                <ModalCountry modal={modal} countryName={countryName} closeModal={this.closeModal}/>
              </Modal>
              <ButtonModal title={sends} onPress={()=> this.onViewModal("sends")} onRequestClose={() => {this.setModalVisible(false);}}/>
              <ButtonModal title={howto} onPress={()=> this.onViewModal("howto")} onRequestClose={() => {this.setModalVisible(false);}}/>
            </ScrollView>
            <Text style={styles.textTerms}>Al continuar aceptas los Terminos y Condiciones</Text>
           <Button  title="Finalizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"arrow-right", type:"font-awesome", size:19, color:"white",}} 
          //  onPress={ ()=> console.log(this.state)} 
           onPress={ ()=> this.props.navigation.navigate("HomePage")} 
           />   
           </View> 
        </View>
      </View>
    </KeyboardAvoidingView>
    )
  }
}