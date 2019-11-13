import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default class ModalAdresss extends Component {
    constructor(props) {
      super(props)
      this.state = {
            
        };
    };
    

    render() {
        const { address, origin ,...props} = this.props;
        var closeModalAdresses = this.props.closeModal;
        let rows = [];
        let stylesButton = {
            backgroundColor:"#fff",
            borderRadius:15,
            width:"100%",
            marginRight: "auto",
            marginLeft: "auto",
        };
        
       if(address == "origin"){
           origin.data.forEach(element => {
               console.log(element)
            rows.push(<Button buttonStyle={stylesButton} titleStyle={{color:"#38b3b9"}} key={`${element.name}`} title={`${element.name} - Av ${element.district},${element.state}`}  
            onPress={() => closeModalAdresses(element.name,)} />
            )
           });
       }
        
        return (
                <View style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.13)", alignItems:"center",justifyContent:"center"}}>
                    <View style={{backgroundColor:"white", width:"95%",height:"50%", borderRadius:20}}>
                        <ScrollView  style={{width:"100%"}}>
                            {rows}
                            <Text onPress={()=>closeModalAdresses()} >WTF</Text>
                        </ScrollView>
                    </View>
                </View>
        )
    }
}
