import React, { Component } from 'react';
import { View, Text,ScrollView,Modal, KeyboardAvoidingView,Platform } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";
import ModalAdresss from "../components/ModalAdresses";
import ModalAdresssAndroid from "../components/ModalAdressesAndroid";
import { Button, Icon } from 'react-native-elements';
import { CountrySelection } from 'react-native-country-list';
import Country from "../utils/country.json";

export default class Destination extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam("info")
    console.log(this.props)
    this.state = {
        countryForSelect:Country,
        selected:"",
        name:"Luis Enrique",
        company: "",
        street: "",
        number: "",
        postalCode: (item) ? item.item.postal_code :"",
        district: (item) ? item.item.neighborhood : "",
        city: (item) ? item.item.city : "",
        info: "",
        phone:"",
        email:"",
        reference:"",
        country:"",
        state_2_digits:(item) ? item.item.state_code :"",
        modalVisible:false,
        modalVisibleAdresss: false,
        modalVisibleAdresssAndroid: false,
        modalVisibleCountry:false,
        stateCountry:"Estado",
        countrySelect:"Selecciona un pais",
        countryName:"Mexico",
        modal:"",
        AllStates:"",
        valueKeyborad:0,
        infoDestination:null,
        ButtonValue: true,
        itemSelect:0,
        itemSelectCountry:0,
    };
    this.closeModal= this.closeModal.bind(this);
    this.closeModalAdresses = this.closeModalAdresses.bind(this);
    this.changeValue = this.changeValue.bind(this)
    this.changeValueCountry = this.changeValueCountry.bind(this)
  }
  static navigationOptions ={
    header:null
  };
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }
  //IOS - Pickers
  changeValue = (value, index) => {
    this.setState({itemSelect:value})
  }

  changeValueCountry = (value) => {
    this.setState({itemSelectCountry: value})
    const AllStates = this.state.AllStates;
    this.setState({
      stateCountry: AllStates.data[value].name,
      state_2_digits: AllStates.data[value].code_2_digits
    });
  }
  
  componentDidMount(){
    this.GetAdressesDestination();
    const code_country = this.props.navigation.getParam("code_country");
    if(typeof code_country !== "undefined"){
      const result = this.state.countryForSelect.find(code => code.code === code_country.toUpperCase());
      console.log(result.name, result.code,)
      this.setState({countrySelect: result.name, country:result.code, ButtonValue:false});
      this.getAllStates(result.code)
    }

  }

  GetAdressesDestination = async ()=>{
    var ruta = "https://queries-dev.herokuapp.com/all-addresses/destination";
    var params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer 0bc9a6cf2f256830f015ea6fe433f9fa6939482f64e9da14d78a79c3e0a8de0f",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(ruta,params)
    .then(response => response.json().then(data => this.ValidationDestination(data)).catch(error => console.log(error)))
    .catch(error => console.log(error))
  }

  ValidationDestination = (data) => {
    if(data.data.length !== 0){
      this.setState({select: "Selecciona una opcion"});
      this.setState({infoDestination: data});
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
  closeModalAdresses(index){
    if(typeof index !== "undefined"){
      const infoDestination = this.state.infoDestination.data
      this.setState({
        city:infoDestination[index].city,
        company:infoDestination[index].company,
        country:infoDestination[index].country,
        description:infoDestination[index].description,
        district:infoDestination[index].district,
        email:infoDestination[index].email,
        name:infoDestination[index].name,
        number:infoDestination[index].number,
        phone:infoDestination[index].phone,
        postalCode:infoDestination[index].postal_code,
        reference:infoDestination[index].reference,
        state:infoDestination[index].state,
        street:infoDestination[index].street,
        type:infoDestination[index].type,
        select:`${infoDestination[index].name} - Av ${infoDestination[index].district},${infoDestination[index].state}`
      })
      this.setState({modalVisibleAdresss:false});
      this.getSingleCountry(infoDestination[index].country);
      this.getSingleState(infoDestination[index].state,infoDestination[index].country);
      this.getAllStates(infoDestination[index].country);
    }else{
      this.setState({modalVisibleAdresss:false});
    }
      
  }
  
  getSingleCountry = async (code) =>{

    let ruteCountry = "http://queries.envia.com/country/"+code;
    let params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer 0bc9a6cf2f256830f015ea6fe433f9fa6939482f64e9da14d78a79c3e0a8de0f",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(ruteCountry, params)
    .then(response => response.json().then(data => {this.setState({countrySelect:data.data[0].name}), this.setState({country:data.data[0].code})}).catch(error => console.log(error)))
    .catch(error => console.log(error))

  }

  getSingleState = async(state,country) =>{
    let ruteSingleState = "http://queries.envia.com/state/"+state;
    let params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer 0bc9a6cf2f256830f015ea6fe433f9fa6939482f64e9da14d78a79c3e0a8de0f",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    fetch(ruteSingleState, params)
    .then(response => response.json()
        .then(data => 
              data.data.forEach(element => {
                if(element.country_code == country)
                  this.setState({stateCountry:element.name})
                  this.setState({ButtonValue:false})
          }) )
      .catch(error => console.log(error)))
    .catch(error => console.log(error))
  }

  getAllStates = async(country) =>{
    let ruteAllStates = "http://queries.envia.com/state?country_code="+country;
    let params = {
      method: "GET",
      headers : {
        'Authorization': "Bearer 0bc9a6cf2f256830f015ea6fe433f9fa6939482f64e9da14d78a79c3e0a8de0f",
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    };

    fetch(ruteAllStates,params).then(response => response.json().then(data => this.setState({AllStates:data})).catch(error => console.log(error))).catch((err) => { console.log(err) });
  }


  modalVisibleCountry(value){
    this.setState({modalVisibleCountry:value});
  }
  
  onCountrySelection = (country) => {
    this.setState({countrySelect:country.name});
    this.setState({state_2_digits:country.code});
    this.setState({modalVisibleCountry: false});
    this.setState({ButtonValue: false});
    this.getAllStates(country.code);
  }
  


  render() {
    const { stateCountry,countryName,modal,name,select,valueKeyborad, company, street, number, postalCode, district, city, phone,email,reference, country,state_2_digits,AllStates,infoOrigin,modalVisibleCountry,selected, countrySelect,ButtonValue,itemSelect, infoDestination,itemSelectCountry } =this.state
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
                        <View style={{flex:5}}>
                        {Platform.OS === "ios" &&
                           <ButtonModal title={select} onPress={() => this.setState({modalVisibleAdresss: true})}/> 
                          }
                          {Platform.OS === "android" &&  
                           <ButtonModal title={select} onPress={() => this.setState({modalVisibleAdresssAndroid: true})}/> 
                          } 
                        </View>
                    </View>
                    <ScrollView style={styles.scrollStyle} >
                    <InputForm label="Nombre" value={name} onChangeText={text => this.onChangeVerify(text,"name")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Empresa" value={company} onChangeText={text => this.onChangeVerify(text,"company")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Telefono" value={phone} onChangeText={text => this.onChangeVerify(text,"phone")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <InputForm label="Correo" value={email} onChangeText={text => this.onChangeVerify(text,"email")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                        <ButtonModal title={countrySelect} onPress={()=> this.setState({modalVisibleCountry:true})}/>
                        <InputForm label="Calle" value={street} onChangeText={text => this.onChangeVerify(text,"street")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Numero"  value={number} onChangeText={text => this.onChangeVerify(text,"number")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Codigo Postal"  value={postalCode} onChangeText={text => this.onChangeVerify(text,"postalCode")} ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        <InputForm label="Colonia" value={district} onChangeText={text => this.onChangeVerify(text,"district")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <InputForm label="Ciudad" value={city} onChangeText={text => this.onChangeVerify(text,"city")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <ButtonModal disabled={ButtonValue} title={stateCountry} onPress={()=> this.onViewModal("state")}/>
                        <InputForm label="Referencia" value={reference} onChangeText={text => this.onChangeVerify(text,"reference")} ChangeKeyBoard={value => this.ChangeKeyBoard(-80)}/>
                    </ScrollView>
                    <View style={{height:80}}></View>
                    <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  
                    onPress={ ()=> {
                      this.props.navigation.navigate("Generate",{
                        destination:{
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
                        <ModalCountry StatebyCountry={AllStates} modal={modal} countryName={countryName} closeModal={this.closeModal} value={itemSelectCountry} changeValue={this.changeValueCountry}/>
            </Modal>
            {Platform.OS === "ios" && 
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleAdresss} onRequestClose={() => {this.modalVisibleAdresss(false);}}>
                  <ModalAdresss address="destination" origin={infoDestination} value={itemSelect} changeValue={this.changeValue} closeModal={this.closeModalAdresses}/>
            </Modal>
            }
            {Platform.OS === "android" &&
              <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleAdresssAndroid} onRequestClose={() => {this.modalVisibleAdresssAndroid(false);}}>
                    <ModalAdresssAndroid address="destination" origin={infoDestination} value={itemSelect}  closeModal={this.closeModalAdressesAndroid}/>
              </Modal>
            }
            <Modal animationType="slide" transparent={false} visible={modalVisibleCountry} onRequestClose={() => {this.setModalVisible(false);}}>
                <View style={{height:"100%",paddingTop:"7%",}}>
                  <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                </View>
            </Modal>  

      </View>
    </KeyboardAvoidingView>
    );
  }
}
