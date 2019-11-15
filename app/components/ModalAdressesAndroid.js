import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform,Picker, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { elementType } from 'prop-types';

export default class ModalAdresss extends Component {
    constructor(props) {
      super(props);
    }; 
    
   

    render() {
        const { address, origin,value ,...props} = this.props;
        var closeModalAdresses = this.props.closeModal;
        let rows = [];
        let stylesButton = {
            backgroundColor:"#fff",
            width:"100%",
            marginRight: "auto",
            marginLeft: "auto",
        };
        
       if(address == "origin" && typeof origin != "undefined"){
           origin.data.forEach((element,i) => {
            rows.push(
            <Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={`${i}-${element.name}-origin`} title={`${element.name} - Av ${element.district},${element.state}`}  
            onPress={() => closeModalAdresses(
                element.city, 
                element.company, 
                element.country, 
                element.description, 
                element.district, 
                element.email, 
                element.name, 
                element.number, 
                element.phone, 
                element.postal_code, 
                element.reference, 
                element.state, 
                element.street, 
                element.type,
                )} />
            )
           });
       }else if(address == "destination"){
        origin.data.forEach((element,i) => {
            rows.push(
            <Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={`${i}-${element.name}-destination`} title={`${element.name} - Av ${element.district},${element.state}`}  
            onPress={() => closeModalAdresses(
                element.city, 
                element.company, 
                element.country, 
                element.description, 
                element.district, 
                element.email, 
                element.name, 
                element.number, 
                element.phone, 
                element.postal_code, 
                element.reference, 
                element.state, 
                element.street, 
                element.type,
                )} />
            )
           });
       }
        
        return (
                <TouchableOpacity style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"center"}} onPressIn={()=>closeModalAdresses()}>
                    <View style={{ backgroundColor:"white",width:"95%", height:"30%",}} >
                        <ScrollView  style={{width:"100%"}}>
                             {rows}
                            <Text onPress={()=>closeModalAdresses()} >WTF</Text>
                        </ScrollView>
                    </View>
                </TouchableOpacity>
        )
    }
}
