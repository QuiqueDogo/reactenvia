import React, { Component } from 'react';
import { Text, View, Modal, ScrollView } from 'react-native';
import DataState from "../utils/data.json";
import { Button } from 'react-native-elements';

export default class ModalCountry extends Component {
    constructor(props) {
      super(props)
      this.state = {
            modal:`${this.props.modal}`,
            DataState: DataState
        };
    };
    
    render() {
        // state
        // sends
        // howto
        const {modal} =this.state
        const { ...props} = this.props;
        var closeModal = this.props.closeModal;
        var countryNameFather = this.props.countryName;
        let SendRows = ["1","2","3","4","5 o mas"];
        let rows = [];
        let HowTo = ["Internet","Anuncios","Television","Otro medio"];
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
              rows.push(<Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={element} title={element} onPress={() => closeModal(`${element}`, "howto")} />)  
            });
        }

        return (
                <View style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.13)", alignItems:"center",justifyContent:"center"}}>
                    <View style={{backgroundColor:"white", width:"85%",height:(modal == "state")?"95%":"25%", borderRadius:20}}>
                        <ScrollView  style={{width:"100%"}}>
                            {rows}
                        </ScrollView>
                    </View>
                </View>
        )
    }
}
