import React, { Component } from 'react';
import { View, Text,ScrollView,Modal, KeyboardAvoidingView } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";
import ModalAdresss from "../components/ModalAdresses";
import { Button, Icon } from 'react-native-elements';

export default class Destination extends Component {
  constructor(props) {
    super(props);
    const countrycodeGenerate = this.props.navigation.state.params
    this.state = {
        name:"Luis Enrique",
        company: "",
        street: "",
        number: "",
        postalCode: "",
        district: "",
        city: "",
        info: "",
        phone:"",
        email:"",
        reference:"",
        country:"MX",
        modalVisible:false,
        modalVisibleAdresss: false,
        stateCountry:"Estado",
        state_2_digits:"",
        countryName:"Mexico",
        countryCode:(countrycodeGenerate.country_code)?`${countrycodeGenerate.country_code}`:"",
        modal:"",
        AllStates:this.props.navigation.state.params.AllStates,
        valueKeyborad:0,
        infoOrigin:null
    };
    this.closeModal= this.closeModal.bind(this);
    this.closeModalAdresses = this.closeModalAdresses.bind(this);
  }
  static navigationOptions ={
    header:null
  };
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }

  componentDidMount(){
    this.GetAdressesOrigin();
  }

  GetAdressesOrigin = async ()=>{
    var ruta = "https://queries-dev.herokuapp.com/all-addresses/origin";
    var params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer 0bc9a6cf2f256830f015ea6fe433f9fa6939482f64e9da14d78a79c3e0a8de0f",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(ruta,params)
    .then(response => response.json().then(data => this.ValidationOrigin(data)).catch(error => console.log(error)))
    .catch(error => console.log(error))
  }

  ValidationOrigin = (data) => {
    if(data.data.length !== 0){
      this.setState({select: "Selecciona una opcion"});
      this.setState({infoOrigin: data});
    }else{
      this.setState({select: "No hay direcciones guardadas."});
    }
  }

  onViewModal = (modal) => {
    this.setState({modal:modal});
    this.setState({modalVisible:true});
  }
  //states
  closeModal(value,state,value2digits) {
    if(value2digits){
      this.setState({state_2_digits:value2digits});
     }
    this.setState({[state]:value});
    this.setState({modalVisible:false});
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }

  ChangeKeyBoard(value ){
    this.setState({valueKeyborad:value});
  }

  modalVisibleAdresss(value){
    this.setState({modalVisibleAdresss:value});
  }
  //adress
  closeModalAdresses(name){
    console.log(name)
    this.setState({modalVisibleAdresss:false});
  }
  
  


  render() {
    const { stateCountry,countryName,modal,name,select,valueKeyborad, company, street, number, postalCode, district, city, phone,email,reference, country,AllStates,state_2_digits,infoOrigin } =this.state
    return (
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" enabled contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad}>
      <View style={styles.containerRegister}>
           <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
                <View style={styles.textHome}>
                    <Text style={styles.textHome}>Origen</Text>
                </View>
                <Button containerStyle={{position:"absolute",left:15,top:40}} raised icon={{ name:"chevron-left", type:"font-awesome", size:19, color:"#cccccc",}}  buttonStyle={{height:45,width:45, borderRadius:30,backgroundColor:"#fff"}} onPress={() => this.props.navigation.goBack()}/>
            </LinearGradient>
            <View style={styles.Division}>
                <View style={styles.cardVerify}>
                    <View style={styles.boxSelect}>
                        <View style={{flex:5,}}>
                            <ButtonModal title={select} onPress={() => this.setState({modalVisibleAdresss: true})}/> 
                        </View>
                    </View>
                    <ScrollView style={styles.scrollStyle} >
                        <InputForm label="Empresa" value={company} onChangeText={text => this.onChangeVerify(text,"company")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Telefono" value={phone} onChangeText={text => this.onChangeVerify(text,"phone")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Correo" value={email} onChangeText={text => this.onChangeVerify(text,"email")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Pais" value={country} onChangeText={text => this.onChangeVerify(text,"country")} ChangeKeyBoard={value => this.ChangeKeyBoard(-170)}/>
                        <InputForm label="Calle" value={street} onChangeText={text => this.onChangeVerify(text,"street")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    <View style={styles.CPandNumber}>
                        <InputForm label="Numero" size="middle" value={number} onChangeText={text => this.onChangeVerify(text,"number")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Codigo Postal" size="middle" value={postalCode} onChangeText={text => this.onChangeVerify(text,"postalCode")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    </View>
                        <InputForm label="Colonia" value={district} onChangeText={text => this.onChangeVerify(text,"district")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <InputForm label="Ciudad" value={city} onChangeText={text => this.onChangeVerify(text,"city")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <ButtonModal title={stateCountry} onPress={()=> this.onViewModal("state")}/>
                        <InputForm label="Referencia" value={reference} onChangeText={text => this.onChangeVerify(text,"reference")} ChangeKeyBoard={value => this.ChangeKeyBoard(-80)}/>
                    </ScrollView>
                    <View style={{height:80}}></View>
                    <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  
                    onPress={ ()=> { 
                      this.props.navigation.navigate("Generate",{
                        origin:{
                          name,
                          company, 
                          street, 
                          number, 
                          postalCode, 
                          district, 
                          city, 
                          phone,
                          email,
                          reference, 
                          country, 
                          state:state_2_digits
                        },
                        stateCountry
                    })}} 
                    />   
                </View> 
            </View>

            {/* Modals */}
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                  <ModalCountry  StatebyCountry={AllStates} modal={modal} countryName={countryName} closeModal={this.closeModal}/>
            </Modal>
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleAdresss} onRequestClose={() => {this.modalVisibleAdresss(false);}}>
                  <ModalAdresss address="origin" origin={infoOrigin} closeModal={this.closeModalAdresses}/>
            </Modal>
                  
      </View>
    </KeyboardAvoidingView>
    );
  }
}
