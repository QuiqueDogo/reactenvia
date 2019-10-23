import React, { Component } from 'react';
import {View, Platform,Modal,TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native';
import { Button, Icon, Text,Image, Input} from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesRegister";
import Header from "../components/Header";
import { CountrySelection } from 'react-native-country-list';
import InputForm from "../components/inputForm";


export default class registerPage extends Component {
  constructor(props) {
  super(props);
  const country = this.props.navigation.state.params
  this.state = {
    modalVisible: false,
    selected:{
      name:(!country.name) ? "Selecciona Pais" :country.name ,
      callingCode:(!country.callingCode) ? "" :country.callingCode ,
      flag:(!country.flag) ? "no" :country.flag ,
      code: (!country.code) ? "" : country.code 
    },
    number:"",
    formErrorMessage:"",
    errormessage:"",
    name:"",
    email:"",
    password:""
  }
}


register = () => {
  console.log(this.state)
  //  const  {name,email,pais,telefono, password} = this.state.formData
  
  //  if(name !="" && email!="" && pais!="" && telefono !="" && password !=""){
  //    const validate = this.refs.registerForm.getValue();
    
  //    if(validate){
  //     console.log("todo bien en el registro")
      // this.props.navigation.navigate("contRegisterPage",{
      //   info: this.state.formData, number: this.state.number
      // })
  //     this.setState({
  //       formErrorMessage: ""
  //     })
  //    }else{
  //      console.log("todo mal en el registro")
  //      this.setState({ formErrorMessage: "Error en el correo electronico" })
  //     }
  //  }else{
  //   this.setState({ formErrorMessage: "LLene los campos..." })
  //  }

  //  console.log(this.state.formData)
}

handleText = (newText, state) =>{
  this.setState({
    [state] :newText
  })
} 


onChangeFormRegister = formValue =>{
  this.setState({
    formData:formValue
  });
}


onCountrySelection = (country) => {
  this.setState({selected: country});
  this.setState({modalVisible: false});

}

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}


static navigationOptions ={
  header:null
}

OnChangeNumber(value,code){
  this.setState({number: "+"+ code  + value})
}

render() {
  const {formErrorMessage,selected,country_code} = this.state;
  const {name,callingCode,flag} = this.state.selected;

  return (
    <KeyboardAvoidingView style={{flex:1,}} behavior="padding">
 
        <View style={{flex:1, borderWidth:3,borderColor:"yellow"}}>
            <View style={{flex:1, borderWidth:3,borderColor:"black"}}>

            <Header title="Bienvenidos!" title2="Inicia Sesion en tu cuenta o registrate con nosotros para empezar a realizar envios facil y rapido"/> 
              <View style={{flex:9, alignItems:"center", borderWidth:3,borderColor:"red"}}>
                <View style={styles.cardStyle}>
                  <ScrollView style={{width:"100%",marginBottom:40,}}>

                          <InputForm  label="Nombre" value={this.state.name} onChangeText={text =>this.handleText(text,"name")} />
                          <InputForm label="Email" value={this.state.email} onChangeText={text =>this.handleText(text,"email")} />
                          <TouchableOpacity style={styles.inputStyles} onPress={() => {this.setModalVisible(true);}}>
                            <Text style={styles.textCountry}>{name}</Text>
                          </TouchableOpacity>

                          <View style={styles.phoneInput}>
                            <View style={styles.codePhone}>
                              <Image style={styles.flagStyle} source={{uri:flag}} />
                              <Text style={styles.codeStyle}>+{callingCode}</Text>
                            </View>
                            <Input type="number" maxLength={10} inputContainerStyle={{width:"60%", borderBottomWidth:0}} inputStyle={{color:"black",fontSize:15, fontWeight:"200"}} onChangeText={value => this.OnChangeNumber(value,callingCode)} />
                          </View>
                          <InputForm label="Contraseña" text="true"value={this.state.password} onChangeText={text =>this.handleText(text,"password")} />
                  </ScrollView>

                    <Button containerStyle={styles.buttonFloating} title="Registrarse" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30 }}  iconRight iconContainerStyle={{ marginLeft: 0 }} icon={{name:"arrow-right", type:"font-awesome", size:19, color:"white",}} onPress={()=>this.register()} />   
                </View>

                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {this.setModalVisible(false);}}>
                        <View style={{height:"100%",paddingTop:"7%",}}>
                          <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                        </View>
                    </Modal>    
              </View>
            </View>
        </View>
</KeyboardAvoidingView>
      );
  }
}