import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import styles from "../../assets/css/StylesDestination";
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from "../components/inputForm";
import ButtonModal from "../components/buttonModal"
import { Button } from 'react-native-elements';

export default class InfoPackage extends Component {
  constructor(props) {
    super(props);
    const info = this.props.navigation.state.params;
    this.state = {
        select:"Selecciona",
        TypeSend:"Tipo de Envio",
        content:"",
        insurance:"",
        type:(info)?info.type:"",
        height:(info)?info.height:"",
        width:(info)?info.width:"",
        length:(info)?info.length:"",
        weight:(info)?info.weight:"",
        amount:"",
        valueKeyborad:0
    };
  }
  static navigationOptions ={
    header:null
  };
  ChangeKeyBoard(value ){
    this.setState({valueKeyborad:value})
  }
  onChangeVerify = (newText, state) => {
    this.setState({
      [state]: newText
    })
  }
  render() {
      const {select,content ,insurance ,type ,height ,width ,length ,weight ,amount} =this.state
    return (
        <View style={styles.containerRegister}>
        <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
             <View style={styles.textHome}>
                 <Text style={styles.textHome}>Informacion del Paquete</Text>
             </View>
             <Button containerStyle={{position:"absolute",left:15,top:40}} raised icon={{ name:"chevron-left", type:"font-awesome", size:19, color:"#cccccc",}}  buttonStyle={{height:45,width:45, borderRadius:30,backgroundColor:"#fff"}} onPress={() => this.props.navigation.goBack()}/>
         </LinearGradient>
         <View style={styles.Division}>
             <View style={styles.cardVerify}>
                 <View style={styles.boxSelect}>
                     <View style={{flex:5}}>
                         <ButtonModal title={select} onPress={() => {this.modalVisibleCountry(true);}} /> 
                     </View>
                 </View>
                 <ScrollView style={styles.scrollStyle}>
                     <InputForm label="Contenido Envio" bigger={true} value={content} onChangeText={text => this.onChangeVerify(text,"content")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                     <InputForm label="Seguro" value={insurance} onChangeText={text => this.onChangeVerify(text,"insurance")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                     <ButtonModal title={(type=="box")?"Paquete":(type=="pallet")?"Sobre":"Tipo de Envio"} onPress={() => {this.modalVisibleCountry(true);}} /> 
                 <View style={styles.CPandNumber}>
                     <InputForm label="Alto" size="middle" value={height} onChangeText={text => this.onChangeVerify(text,"height")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                     <InputForm label="Ancho" size="middle" value={width} onChangeText={text => this.onChangeVerify(text,"width")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                 </View>
                 <View style={styles.CPandNumber}>
                     <InputForm label="Largo" size="middle" value={length} onChangeText={text => this.onChangeVerify(text,"length")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                     <InputForm label="Peso" size="middle" value={weight} onChangeText={text => this.onChangeVerify(text,"weight")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                 </View>
                     <InputForm label="Cantidad Giuas" bigger={true}  value={amount} onChangeText={text => this.onChangeVerify(text,"amount")} ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                 </ScrollView>
                 <View style={{height:80}}></View>
                 <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  onPress={ ()=> this.props.navigation.navigate("Generate",{
                    packages :[{ 
                      type,
                      content,
                      insurance:parseInt(insurance),
                      weight:parseInt(weight),
                      dimensions:{
                        width:parseInt(width),
                        length:parseInt(length),
                        height:parseInt(height)
                      },
                      amount:parseInt(amount),
                      "lengthUnit": "CM"
                      ,"weightUnit": "KG"
                      ,"declaredValue": 0
                    }]
                 })} 
                 />   
             </View> 
         </View>
   </View>
    );
  }
}
