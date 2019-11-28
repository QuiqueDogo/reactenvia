import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform,Picker, TouchableOpacity } from 'react-native';
import { Button,Divider } from 'react-native-elements';


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
            height:50,
            padding:15,
        };
        
       if(address == "origin" && typeof origin != "undefined"){
           origin.data.forEach((element,i) => {
            rows.push(
             <View key={`${i}-${element.name}-origin`}>   
                <TouchableOpacity style={stylesButton}    
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
                    )} 
                >
                    <Text style={{textTransform:"uppercase", fontWeight:"400"}}>{`${element.name} - Av ${element.district},${element.state}`}</Text>
                </TouchableOpacity>
            </View>
            )
           });
       }else if(address == "destination"){
        origin.data.forEach((element,i) => {
            rows.push(
            <View key={`${i}-${element.name}-origin`}> 
                <TouchableOpacity style={stylesButton}   
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
                    )}>
                    <Text style={{textTransform:"uppercase", fontWeight:"400"}}>{`${element.name} - Av ${element.district},${element.state}`}</Text>
                </TouchableOpacity>
            </View>    
            )
           });
       }
        
        return (
                <TouchableOpacity style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"center"}} onPressIn={()=>closeModalAdresses()}>
                    <View style={{ backgroundColor:"white",width:"90%", height:"50%",}} >
                        <ScrollView  style={{width:"100%"}}>
                             {rows}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
        )
    }
}
