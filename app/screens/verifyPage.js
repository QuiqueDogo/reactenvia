import React, { Component } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform,Modal} from 'react-native';

import InputForm from "../components/inputForm";
import styles from "../../assets/css/stylesVerify";
import Header from "../components/Header";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";

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
    }
  }
  static navigationOptions ={
    header:null
  }

  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }

  onViewModal = () => {
    this.setState({modalVisible:true})
  }

  closeModal = (value) => {
    this.setState({modalVisible:false})
    console.log(value)
  }

  render(){
    // const { countryName } =this.
    const verticalNumber = (Platform.OS == "android") ? 0 : -250;
    return(
    <KeyboardAvoidingView style={styles.containerRegister} behavior="padding"  contentContainerStyle={styles.containerRegister} >  
      <View style={styles.containerRegister}>
       <Header title="Continuemos" title2="Completa la siguiente informacion para crear tu cuenta"/>
        <View style={styles.section2}>
           <View style={styles.cardVerify}> 
            <ScrollView style={styles.scrollStyle}>
           		<InputForm label="Empresa" value={this.state.empresa} onChangeText={text => this.onChangeVerify(text,"empresa")}/>
               <Text style={styles.textStyle}>Direccion</Text>
           		<InputForm label="Calle" value={this.state.calle} onChangeText={text => this.onChangeVerify(text,"calle")}/>
              <View style={styles.CPandNumber}>
                <InputForm label="Numero" size="middle" value={this.state.numero} onChangeText={text => this.onChangeVerify(text,"numero")}/>
                <InputForm label="Codigo Postal" size="middle" value={this.state.codigoPostal} onChangeText={text => this.onChangeVerify(text,"codigoPostal")}/>
              </View>
           		<InputForm label="Colonia" value={this.state.colonia} onChangeText={text => this.onChangeVerify(text,"colonia")}/>
           		<InputForm label="Ciudad" value={this.state.ciudad} onChangeText={text => this.onChangeVerify(text,"ciudad")}/>
           	  <ButtonModal title="Estado" onPress={()=> this.onViewModal()}/>
              <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                <ModalCountry onPress={(value) => this.closeModal(value)} />
              </Modal>
            </ScrollView>
            <Text style={styles.textTerms}>Al continuar aceptas los Terminos y Condiciones</Text>
           </View> 
           {/* <Button  title="Finalizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={ ()=> this.props.navigation.navigate("homePage")} />    */}
        </View>
      </View>
    </KeyboardAvoidingView>
    )
  }
}