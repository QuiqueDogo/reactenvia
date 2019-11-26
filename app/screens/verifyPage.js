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
        state_2_digits:"",
        countryName:"Mexico",
        sends:"¿Cuantos Envios realiza por mes?",
        howto:"¿Como te enteraste de nosotros?",
        modal:"",
        StatebyCountry:"mx", // este debe sacarse de la primera pagina
        valueKeyborad: -170,
        AllStates:null,
        valueSends:0,
        valueHowTo:0,
        valueState:0,
    }
    this.closeModal= this.closeModal.bind(this);
    this.ChangeKeyBoard = this.ChangeKeyBoard.bind(this);
    this.changeValueCountry = this.changeValueCountry.bind(this);
  }
  static navigationOptions ={
    header:null,
  }
  componentWillMount(){
    let country_code = this.state.StatebyCountry
    let ruta = "https://queries.envia.com/state?country_code="+country_code.toUpperCase();
    let params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer cb422161bbcba1887477d5376101c27b6899982c7531a1b28fbce75f13d1ebd3",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(ruta, params).then(response => response.json().then(data => this.setState({AllStates:data})).catch(error => console.log(error))).catch(error => console.log(error))
}
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }

  OnChangeValue = () => {
    this.empresa.checkvalue() // para verificar que cada campo no este vacio (solo funciona con el componente de inputForm.js)
    
  }

  onViewModal = (modal) => {
    this.setState({modal:modal})
    this.setState({modalVisible:true})
  }

  closeModal(value,state,value2digits) {
    if(value2digits){
     this.setState({state_2_digits:value2digits})
    }
    this.setState({[state]:value})
    this.setState({modalVisible:false})
  }

  setModalVisible(value){
    this.setState({modalVisible:value})
  }

  ChangeKeyBoard(value ){
    this.setState({valueKeyborad:value})
  }

  changeValueCountry = (value,index,modal) => {
    console.log(value, index, modal);
    if(modal == "sends"){
      this.setState({valueSends:value});
    }else if(modal == "howto"){
      this.setState({valueHowTo:value});
    }else if(modal == "state"){
      this.setState({valueState:value});
    }

  }
  
  CheckValues = () => {
    // if(thisempresa thiscalle thisnumero thiscodigoPostal thiscolonia thisciudad){

    // }
  }

  render(){
    let SendRows = ["Menos de 25","De 26 a 100","De 101 a 300","Mas de 300"];
        let HowTo = [
            one=["BUSCADOR","Buscador (Google, Yahoo, Bing u otros)"],
            two=["REDES_SOCIALES","Redes Sociales."],
            three=["RECOMENDACION","Recomendación de un conocido."],
            four=["EJECUTIVO","La contacto un ejecutivo de Envía."],
            five=["OTRO","Otro."]
        ];
    const { stateCountry,countryName,modal,sends,howto, valueKeyborad,AllStates,valueSends, valueHowTo, valueState} =this.state
    const verticalNumber = (Platform.OS == "android") ? 0 : -250;
    return(
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad} >  
      <View style={styles.containerRegister}>
       <Header title="Continuemos" title2="Completa la siguiente informacion para crear tu cuenta"/>
        <View style={styles.section2}>
           <View style={styles.cardVerify}> 
            <ScrollView style={styles.scrollStyle}>
           		<InputForm onRef={ref => (this.empresa = ref)} label="Empresa" value={this.state.empresa} onChangeText={text => this.onChangeVerify(text,"empresa")} ChangeKeyBoard={() => this.ChangeKeyBoard(-250)} />
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
                <ModalCountry StatebyCountry={AllStates} modal={modal} countryName={countryName} value={valueState} valueSends={valueSends} valueHowTo={valueHowTo} changeValue={this.changeValueCountry} closeModal={this.closeModal}/>
              </Modal>
              <ButtonModal title={sends} onPress={()=> this.onViewModal("sends")} onRequestClose={() => {this.setModalVisible(false);}}/>
              <ButtonModal title={howto} onPress={()=> this.onViewModal("howto")} onRequestClose={() => {this.setModalVisible(false);}}/>
            </ScrollView>
            <Text style={styles.textTerms}>Al continuar aceptas los Terminos y Condiciones</Text>
           <Button  title="Finalizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"arrow-right", type:"font-awesome", size:19, color:"white",}} 
           onPress={ ()=> {
            this.CheckValues()
            }} 
           />   
           </View> 
        </View>
      </View>
    </KeyboardAvoidingView>
    )
  }
}