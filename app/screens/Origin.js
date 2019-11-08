import React, { Component } from 'react';
import { View, Text,ScrollView,Modal, KeyboardAvoidingView } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";
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
        country:"Mexico",
        modalVisible:false,
        modalVisibleCountry:false,
        stateCountry:"Estado",
        state_2_digits:"",
        countryName:"Mexico",
        countryCode:(countrycodeGenerate.country_code)?`${countrycodeGenerate.country_code}`:"",
        modal:"",
        AllStates:this.props.navigation.state.params.AllStates,
        valueKeyborad:0
    };
    this.closeModal= this.closeModal.bind(this);
  }
  static navigationOptions ={
    header:null
  };
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
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
  modalVisibleCountry(value){
    this.setState({modalVisibleCountry:value})
  }
  onCountrySelection = (country) => {
    this.setState({selected: country});
    this.setState({modalVisibleCountry: false});
  
  }

  ChangeKeyBoard(value ){
    this.setState({valueKeyborad:value})
  }
  


  render() {
    const { stateCountry,countryName,modal,name,select,valueKeyborad, company, street, number, postalCode, district, city, phone,email,reference, country,countryCode,AllStates,state_2_digits } =this.state
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
                        <View style={{flex:5,paddingRight:20}}>
                            <ButtonModal title={select} /> 
                        </View>
                        <Button  containerStyle={{flex:1, paddingTop:18}} icon={{ name:"plus", type:"font-awesome", size:19, color:"white",}} buttonStyle={{height:48,width:55, borderRadius:10,backgroundColor:"#00b3bc"}}/>
                    </View>
                    <ScrollView style={styles.scrollStyle} >
                        <InputForm label="Empresa" value={this.state.company} onChangeText={text => this.onChangeVerify(text,"company")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Telefono" value={this.state.phone} onChangeText={text => this.onChangeVerify(text,"phone")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Correo" value={this.state.email} onChangeText={text => this.onChangeVerify(text,"email")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Pais" value={this.state.country} onChangeText={text => this.onChangeVerify(text,"country")} ChangeKeyBoard={value => this.ChangeKeyBoard(-170)}/>
                        <InputForm label="Calle" value={this.state.street} onChangeText={text => this.onChangeVerify(text,"street")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    <View style={styles.CPandNumber}>
                        <InputForm label="Numero" size="middle" value={this.state.number} onChangeText={text => this.onChangeVerify(text,"number")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Codigo Postal" size="middle" value={this.state.postalCode} onChangeText={text => this.onChangeVerify(text,"postalCode")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    </View>
                        <InputForm label="Colonia" value={this.state.district} onChangeText={text => this.onChangeVerify(text,"district")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <InputForm label="Ciudad" value={this.state.city} onChangeText={text => this.onChangeVerify(text,"city")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <ButtonModal title={stateCountry} onPress={()=> this.onViewModal("state")}/>
                        <InputForm label="Referencia" value={this.state.reference} onChangeText={text => this.onChangeVerify(text,"reference")} ChangeKeyBoard={value => this.ChangeKeyBoard(-80)}/>
                    </ScrollView>
                    <View style={{height:80}}></View>
                    <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  
                    onPress={ ()=> { 
                      this.props.navigation.navigate("Generate",{
                        origin:{name,company, street, number, postalCode, district, city, phone,email,reference, country, state:state_2_digits},
                        stateCountry
                    })}} 
                    />   
                </View> 
            </View>

            {/* Modals */}
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                        <ModalCountry  StatebyCountry={AllStates} modal={modal} countryName={countryName} closeModal={this.closeModal}/>
            </Modal>
                  
      </View>
    </KeyboardAvoidingView>
    );
  }
}
