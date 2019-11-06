import React, { Component } from 'react';
import { View, Text,ScrollView,Modal, KeyboardAvoidingView } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import { CountrySelection } from 'react-native-country-list';
import ModalCountry from "../components/ModalCountry";
import { Button, Icon } from 'react-native-elements';

export default class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
        empresa: "",
        calle: "",
        numero: "",
        codigoPostal: "",
        colonia: "",
        ciudad: "",
        Estado: "",
        enviosMes: "",
        info: "",
        phone:"",
        email:"",
        reference:"",
        Pais:"Mexico",
        modalVisible:false,
        modalVisibleCountry:false,
        stateCountry:"Estado",
        countryName:"Mexico",
        modal:"",
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

  closeModal(value,state) {
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
    const { stateCountry,countryName,modal,selected,select,valueKeyborad } =this.state
    return (
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" enabled contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad}>
      <View style={styles.containerRegister}>
           <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
                <View style={styles.textHome}>
                    <Text style={styles.textHome}>Destino</Text>
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
                        <InputForm label="Empresa" value={this.state.empresa} onChangeText={text => this.onChangeVerify(text,"empresa")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Telefono" value={this.state.phone} onChangeText={text => this.onChangeVerify(text,"phone")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Correo" value={this.state.email} onChangeText={text => this.onChangeVerify(text,"email")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Pais" value={this.state.Pais} onChangeText={text => this.onChangeVerify(text,"Pais")} ChangeKeyBoard={value => this.ChangeKeyBoard(-170)}/>
                        <InputForm label="Calle" value={this.state.calle} onChangeText={text => this.onChangeVerify(text,"calle")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    <View style={styles.CPandNumber}>
                        <InputForm label="Numero" size="middle" value={this.state.numero} onChangeText={text => this.onChangeVerify(text,"numero")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Codigo Postal" size="middle" value={this.state.codigoPostal} onChangeText={text => this.onChangeVerify(text,"codigoPostal")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                    </View>
                        <InputForm label="Colonia" value={this.state.colonia} onChangeText={text => this.onChangeVerify(text,"colonia")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <InputForm label="Ciudad" value={this.state.ciudad} onChangeText={text => this.onChangeVerify(text,"ciudad")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <ButtonModal title={stateCountry} onPress={()=> this.onViewModal("state")}/>
                        <InputForm label="Referencia" value={this.state.reference} onChangeText={text => this.onChangeVerify(text,"reference")} ChangeKeyBoard={value => this.ChangeKeyBoard(-80)}/>
                    </ScrollView>
                    <View style={{height:80}}></View>
                    <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  onPress={ ()=> console.log(this.state)} 
                    />   
                </View> 
            </View>

            {/* Modals */}
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                        <ModalCountry modal={modal} countryName={countryName} closeModal={this.closeModal}/>
                    </Modal>
                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisibleCountry} onRequestClose={() => {this.modalVisibleCountry(false);}}>
                        <View style={{height:"100%",paddingTop:"7%",}}>
                          <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                        </View>
                    </Modal>  
      </View>
    </KeyboardAvoidingView>
    );
  }
}
