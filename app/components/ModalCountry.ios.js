import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform, Picker, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class ModalCountry extends Component {
    constructor(props) {
      super(props)
      this.state = {
            StatebyCountry : this.props.StatebyCountry,
            modal:`${this.props.modal}`,
            heigthModalSends:(Platform.OS == "ios") ? "20%" :"24%",
            heigthModalother:(Platform.OS == "ios") ? "33%" :"35%",
            AllStates: null,
        };
    };
    

    render() {
        const {modal} =this.state
        const {value, ...props} = this.props;
        var closeModal = this.props.closeModal;
        var changeValueCountry = this.props.changeValue;
        var StatebyCountry = this.state.StatebyCountry.data;
        let rows = [];
        let SendRows = ["Menos de 25","De 26 a 100","De 101 a 300","Mas de 300"];
        let HowTo = [
            one=["BUSCADOR","Buscador (Google, Yahoo, Bing u otros)"],
            two=["REDES_SOCIALES","Redes Sociales (Facebook, Instagram o Twitter)."],
            three=["RECOMENDACION","Recomendación de un conocido."],
            four=["EJECUTIVO","La contacto un ejecutivo de Envía."],
            five=["OTRO","Otro."]
        ];
        let stylesButton = {
            backgroundColor:"#fff",
            borderRadius:15,
            width:"80%",
            marginRight: "auto",
            marginLeft: "auto",
        };
        
        if (modal == "state") {
           
            StatebyCountry.forEach((element,i) => {
                rows.push(<Picker.Item key={`${element.name}`} label={`${element.name}`} value={`${i}`}  onPress={() => closeModal(`${element.name}`, "stateCountry",`${element.code_2_digits}`)} />)
            });

        } else if(modal == "sends"){

            SendRows.forEach(element => {
                rows.push(<Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={`${element}`} title={`${element}`}  onPress={() => closeModal(`${element}`, "sends")} />)
            });
                
            
        } else if(modal == "howto"){

            HowTo.forEach(element => {
              rows.push(<Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={element[1]} title={element[1]} onPress={() => closeModal(`${element[0]}`, "howto")} />)  
            });
        }

        return (
            <TouchableOpacity style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"flex-end"}} onPressIn={()=>closeModal()}>
                <View style={{ backgroundColor:"white",width:"100%", borderBottomWidth:1, borderColor:"#e2e2e2", height:50, flexDirection:"row" , justifyContent: "space-around"}} >
                    <TouchableOpacity style={{ width:"20%", alignItems:"center",justifyContent:"center",}} onPress={() => closeModal()} >
                        <Text style={{fontSize:17, color:"red"}}>Cancelar</Text>
                    </TouchableOpacity>
                    <View style={{ width:"20%", alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:15, }}>Estado</Text>
                    </View>
                    <TouchableOpacity style={{ width:"20%", alignItems:"center",justifyContent:"center"}} onPress={() => closeModal(value)}>
                        <Text style={{fontSize:17, color:"#0d8ee9"}}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:"white", width:"100%",height:"auto",}}>
                    <Picker
                        selectedValue={value}
                        onValueChange={(value, index) => changeValueCountry(value,index)}
                    >  
                        {rows}
                    </Picker>
                </View>
            </TouchableOpacity>
        )
    }
}
