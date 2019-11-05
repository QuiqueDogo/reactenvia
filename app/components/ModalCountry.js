import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform } from 'react-native';
import DataState from "../utils/data.json";
import { Button } from 'react-native-elements';

export default class ModalCountry extends Component {
    constructor(props) {
      super(props)
      this.state = {
            modal:`${this.props.modal}`,
            DataState: DataState, 
            heigthModalSends:(Platform.OS == "ios") ? "20%" :"24%",
            heigthModalother:(Platform.OS == "ios") ? "33%" :"35%"
        };
    };
    
    render() {
        const {modal, heigthModalSends,heigthModalother} =this.state
        const { ...props} = this.props;
        var closeModal = this.props.closeModal;
        var countryNameFather = this.props.countryName;
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
            this.state.DataState.forEach((item)=> {
                if (item.countryName == countryNameFather){
                    for (let i = 0; i < item.regions.length; i++) {
                        rows.push(<Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={`${item.regions[i].name}`} title={`${item.regions[i].name}`}  onPress={() => closeModal(`${item.regions[i].name}`, "stateCountry")} />)
                    }
                }
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
                <View style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.13)", alignItems:"center",justifyContent:"center"}}>
                    <View style={{backgroundColor:"white", width:"85%",height:(modal == "state")?"95%":(modal == "sends")?heigthModalSends:heigthModalother, borderRadius:20}}>
                        <ScrollView  style={{width:"100%"}}>
                            {rows}
                        </ScrollView>
                    </View>
                </View>
        )
    }
}
