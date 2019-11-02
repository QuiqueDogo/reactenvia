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
    this.state = {
        select:"Selecciona",
        TypeSend:"Tipo de Envio",
        content:"",
        sure:"",
        contentGuides:"",
        height:"",
        width:"",
        length:"",
        weight:"",
    };
  }
  static navigationOptions ={
    header:null
  };
  render() {
      const {select,TypeSend} =this.state
    return (
        <View style={styles.containerRegister}>
        <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
             <View style={styles.textHome}>
                 <Text style={styles.textHome}>Informacion del Paquete</Text>
             </View>
             <Button containerStyle={{position:"absolute",left:15,top:40}} raised icon={{ name:"chevron-left", type:"font-awesome", size:19, color:"#cccccc",}}  buttonStyle={{height:45,width:45, borderRadius:30,backgroundColor:"#fff"}}/>
         </LinearGradient>
         <View style={styles.Division}>
             <View style={styles.cardVerify}>
                 <View style={styles.boxSelect}>
                     <View style={{flex:5,paddingRight:20}}>
                         <ButtonModal title={select} onPress={() => {this.modalVisibleCountry(true);}} /> 
                     </View>
                     <Button  containerStyle={{flex:1, paddingTop:18}} icon={{ name:"plus", type:"font-awesome", size:19, color:"white",}} buttonStyle={{height:48,width:55, borderRadius:10,backgroundColor:"#00b3bc"}}/>
                 </View>
                 <ScrollView style={styles.scrollStyle}>
                     <InputForm label="Contenido Envio" bigger={true} value={this.state.content} onChangeText={text => this.onChangeVerify(text,"content")}/>
                     <InputForm label="Seguro" value={this.state.sure} onChangeText={text => this.onChangeVerify(text,"sure")}/>
                     <ButtonModal title={TypeSend} onPress={() => {this.modalVisibleCountry(true);}} /> 
                 <View style={styles.CPandNumber}>
                     <InputForm label="Alto" size="middle" value={this.state.height} onChangeText={text => this.onChangeVerify(text,"height")}/>
                     <InputForm label="Ancho" size="middle" value={this.state.width} onChangeText={text => this.onChangeVerify(text,"width")}/>
                 </View>
                 <View style={styles.CPandNumber}>
                     <InputForm label="Largo" size="middle" value={this.state.length} onChangeText={text => this.onChangeVerify(text,"length")}/>
                     <InputForm label="Peso" size="middle" value={this.state.weight} onChangeText={text => this.onChangeVerify(text,"weight")}/>
                 </View>
                     <InputForm label="Cantidad Giuas" bigger={true}  value={this.state.contentGuides} onChangeText={text => this.onChangeVerify(text,"contentGuides")}/>
                 </ScrollView>
                 <View style={{height:80}}></View>
                 <Button  title="Guardar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, textAlign:"center"}} containerStyle={styles.buttonVerify}  onPress={ ()=> console.log(this.state)} 
                 />   
             </View> 
         </View>
   </View>
    );
  }
}
