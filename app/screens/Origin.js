import React, { Component } from 'react';
import { View, Text,ScrollView,Modal, KeyboardAvoidingView, Platform, Picker, SafeAreaView, TouchableHighlightBase } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import ModalCountry from "../components/ModalCountry";
import PickerAddress from "../components/ios/PickerAddress";
import ModalAdresss from "../components/ModalAdresses";
import ModalAdresssAndroid from "../components/ModalAdressesAndroid";
import { Button, Icon,ListItem } from 'react-native-elements';
import { CountrySelection } from 'react-native-country-list';
import Country from "../utils/country.json";
import { func } from 'prop-types';


export default class Destination extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam("info");
    const OriginRedux = this.props.OriginState;
    this.state = {
        countryForSelect: Country,
        selected:null,
        name: OriginRedux.name,
        company: OriginRedux.company,
        street: OriginRedux.street,
        number: OriginRedux.number,
        postalCode: (item)? item.item.postal_code : OriginRedux.postalCode,
        district: (item)? item.item.neighborhood : OriginRedux.district,
        city: (item)? item.item.city : OriginRedux.city,
        info: "",
        select: "Cargando...",
        phone: OriginRedux.phone,
        email: OriginRedux.email,
        reference: "",
        country:OriginRedux.country,
        state_2_digits: (item)? item.item.state_code : OriginRedux.state,
        modalVisible:false,
        modalVisibleAdresss: false,
        modalVisibleAdresssAndroid: false,
        modalVisibleCountry:false,
        stateCountry:"Estado",
        countrySelect:"Selecciona un pais",
        modal:"",
        valueKeyborad:0,
        infoOrigin:null,
        AllStates:"",
        ButtonValue: true,
        DataDistrict:null,
        SelectedPicker:"Colonia",
        itemSelect:0,
        itemSelectCountry:0,
        itemSelectDistrict:0,
        valueDistrictAndroid:0,
        titleList:"Selecciona una opcion",
        modalNeighborhood:false
    };
    this.closeModal= this.closeModal.bind(this);
    this.closeModalAdresses = this.closeModalAdresses.bind(this);
    this.closeModalAdressesAndroid = this.closeModalAdressesAndroid.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeValueCountry = this.changeValueCountry.bind(this);
    this.changeValueDistrict = this.changeValueDistrict.bind(this);
    this.AddressCheck = this.AddressCheck.bind(this);
  }
  static navigationOptions ={
    header:null
  };

  componentDidMount() {
    this.GetAdressesOrigin();
    this.CodePostalGenerate();
    this.CheckRedux();
  }

  CheckRedux = async () => {
    const CheckValues = this.props.OriginState;
    function checkProperties(obj) {
      for (var key in obj) {
        if (obj[key] !== null && obj[key] != "")
          return false;
      }
      return true;
    }
    if(checkProperties(CheckValues) === false){
      this.getSingleCountry(CheckValues.country);
      this.getSingleState(CheckValues.state, CheckValues.country)
      this.getAllStates(CheckValues.country)
    }
  }


  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }

  changeValue = (value, index) => {
    this.setState({itemSelect:value})
  }

  changeValueDistrict = (value, index) => {
    this.setState({itemSelectDistrict:value});
    this.setState({district: this.state.DataDistrict[value]})
  }
  changeValueCountry = (value, index) => {
    this.setState({itemSelectCountry:value});
    const AllStates = this.state.AllStates;
    this.setState({
      stateCountry:AllStates.data[value].name,
      state_2_digits:AllStates.data[value].code_2_digits
    });
  }

  CodePostalGenerate = async () => {
    const code_country = this.props.navigation.getParam("code_country");
    const info = this.props.navigation.getParam("info");
    if (typeof code_country !== "undefined") {
      const result = this.state.countryForSelect.find(code => code.code === code_country.toUpperCase());
      this.setState({
        countrySelect: result.name,
        country: result.code,
        ButtonValue: false
      });
      this.getAllStates(result.code)
      if (info.item.state_code == "MC") {
        info.item.state_code = "MI";
      }
      this.getSingleState(info.item.state_code, result.code)
    }
  }

  

  GetAdressesOrigin = async () =>{
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
    .catch(error => console.log(error));
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
  modalVisibleAdresssAndroid(value){
    this.setState({modalVisibleAdresssAndroid:value});
  }
  //adress
  closeModalAdresses(index){
    if(typeof index !== "undefined"){
      const infoOrigin = this.state.infoOrigin.data;
      this.setState({
        city:infoOrigin[index].city,
        company:infoOrigin[index].company,
        country:infoOrigin[index].country,
        description:infoOrigin[index].description,
        district:infoOrigin[index].district,
        email:infoOrigin[index].email,
        name:infoOrigin[index].name,
        number:infoOrigin[index].number,
        phone:infoOrigin[index].phone,
        postalCode:infoOrigin[index].postal_code,
        reference:infoOrigin[index].reference,
        state_2_digits:infoOrigin[index].state,
        street:infoOrigin[index].street,
        type:infoOrigin[index].type,
        select:`${infoOrigin[index].name} - Av ${infoOrigin[index].district},${infoOrigin[index].state}`
      });
      this.setState({modalVisibleAdresss:false});
      this.getSingleCountry(infoOrigin[index].country);
      this.getSingleState(infoOrigin[index].state,infoOrigin[index].country);
      this.getAllStates(infoOrigin[index].country);
    }
      this.setState({modalVisibleAdresss:false});
      
  }

  

  closeModalAdressesAndroid = (city, company, country, description, district, email, name, number, phone, postal_code, reference, state, street, type) => {
    if(typeof company !== "undefined"){
        this.setState({
          city:city,
          company:company,
          country:country,
          description:description,
          district:district,
          email:email,
          name:name,
          number:number,
          phone:phone,
          postalCode:postal_code,
          reference:reference,
          state_2_digits:state,
          street:street,
          type:type,
          select:`${name} - Av ${district},${state}`
        })
        this.setState({modalVisibleAdresssAndroid:false});
        this.getSingleCountry(country);
        this.getSingleState(state,country);
        this.getAllStates(country);
      }else{
        this.setState({modalVisibleAdresssAndroid:false});
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
    };
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
    };
    fetch(ruteSingleState, params)
    .then(response => response.json()
        .then(data => 
              data.data.forEach(element => {
                if(element.country_code == country)
                  this.setState({stateCountry:element.name})
                  this.setState({ButtonValue:false})
          }) )
        .catch(error => console.log(error)))
    .catch(error => console.log(error));
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
    this.setState({country:country.code});
    this.setState({modalVisibleCountry: false});
    this.setState({ButtonValue: false});
    this.getAllStates(country.code);
  }

  PostalCodeText = async (newText, country) => {
    this.setState({
      postalCode: newText
    })
    
    if(newText.length == 5){
      let ruta  = `https://enviaya.com.mx/shipping/address_short_search.json?q=${newText}&country=${country}`;
      let params = {
        method: "GET",
        headers : {
          "Referer":"https://enviaya.com.mx",
          'Content-Type': 'application/json',
          "Origin":"https://enviaya.com.mx",
        },
        mode: 'cors'
      }
      console.log(ruta)
      fetch(ruta,params).then(response => response.json().then(data => this.DataArray(data, country.toUpperCase())).catch(error => console.log(error))).catch(error => console.log(error));
    }
  }

  DataArray = (data,country) => {
    const info = [];
    if(typeof data == "object"){
      data.forEach(element => {
        info.push(element.neighborhood);
      });
      this.setState({DataDistrict:info});
      this.setState({city:data[0].city});
      this.setState({district:data[0].neighborhood});
      this.setState({modalNeighborhood: true});
      if(data[0].state_code){
        if(data[0].state_code == "MC"){
          data[0].state_code = "MI";
        }
        this.setState({ButtonValue: false});
        this.getSingleState(data[0].state_code,country)
        this.getAllStates(country);
      }
    }
  }

  AddressCheck = (data, index) => {
    this.setState({district: data});
    this.setState({valueDistrictAndroid:index});
  }

  

  render() {
    const { stateCountry,
            valueKeyborad,
            modal,
             name,
             select,
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
             state_2_digits,
            AllStates,
            infoOrigin,
            modalVisibleCountry,
            countrySelect,
            selected,
            ButtonValue,
            DataDistrict,
            itemSelect,
            itemSelectDistrict,
            itemSelectCountry,
            valueDistrictAndroid,
          } =this.state
    return (
    <KeyboardAvoidingView style={styles.containerRegister} behavior="position" enabled contentContainerStyle={styles.containerRegister} keyboardVerticalOffset={valueKeyborad}>
      <View style={styles.containerRegister}>
           <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
                <View style={styles.textHome}>
                    <Text style={styles.textHome}>Origen</Text>
                </View>
                <Button containerStyle={{position:"absolute",left:15,top:40 }} raised icon={{ name:"chevron-left", type:"font-awesome", size:19, color:"#cccccc",}}  buttonStyle={{height:45,width:45, borderRadius:30,backgroundColor:"#fff"}} onPress={() => this.props.navigation.goBack()}/>
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
                        <InputForm label="Codigo Postal" bigger={true} value={postalCode} onChangeText={text => this.PostalCodeText(text, "mx")} 
                        ChangeKeyBoard={value => this.ChangeKeyBoard(-120)}/>
                        { (this.state.modalNeighborhood ===  true && Platform.OS == "ios") &&
                          <PickerAddress data={DataDistrict} changeValueDistrict={this.changeValueDistrict} value={itemSelectDistrict}/>
                        }
                        { (this.state.modalNeighborhood ===  true && Platform.OS == "android") &&
                          <PickerAddress data={DataDistrict} value={valueDistrictAndroid} AddressCheck={this.AddressCheck}/>
                        }
                        { this.state.modalNeighborhood === false &&
                          <InputForm label="Colonia" value={district} onChangeText={text => this.onChangeVerify(text,"district")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/> 
                        }
                        <InputForm label="Ciudad" value={city} onChangeText={text => this.onChangeVerify(text,"city")} ChangeKeyBoard={value => this.ChangeKeyBoard(-110)}/>
                        <ButtonModal disabled={ButtonValue} title={stateCountry} onPress={()=> this.onViewModal("state")}/>
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
                  <ModalCountry  StatebyCountry={AllStates} modal={modal} closeModal={this.closeModal} value={itemSelectCountry} changeValue={this.changeValueCountry}/>
            </Modal>
            {Platform.OS === "ios" &&
              <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleAdresss} onRequestClose={() => {this.modalVisibleAdresss(false);}}>
                  <ModalAdresss address="origin" origin={infoOrigin} value={itemSelect} changeValue={this.changeValue} closeModal={this.closeModalAdresses}/>
              </Modal>
            }
            {Platform.OS === "android" &&
              <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleAdresssAndroid} onRequestClose={() => {this.modalVisibleAdresssAndroid(false);}}>
                    <ModalAdresssAndroid address="origin" origin={infoOrigin} value={itemSelect}  closeModal={this.closeModalAdressesAndroid}/>
              </Modal>
            }
            <Modal animationType="slide" transparent={false} visible={modalVisibleCountry} onRequestClose={() => {this.setModalVisible(false);}}>
                <SafeAreaView>
                  <View style={{height:"100%"}}>
                    <CountrySelection action={(item) => this.onCountrySelection(item)} selected={selected} />
                  </View>
                </SafeAreaView>
            </Modal>  
                  
      </View>
    </KeyboardAvoidingView>
    );
  }
}
