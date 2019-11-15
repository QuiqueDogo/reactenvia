import React, { Component } from 'react';
import { Text, View, Modal, ScrollView, Platform,Picker } from 'react-native';
import { Button } from 'react-native-elements';

export default class ModalAdresss extends Component {
    constructor(props) {
      super(props)

      this.state = {
            item:""
        };
    }; 
    
    changeValue = (value, index) => {
        this.setState({item:value})
        console.log(value, index)
    }

    render() {
        const {item} = this.state
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
        
       if(address == "origin" && typeof origin != "undefined"){
           origin.data.forEach((element,i) => {
            rows.push(
                // <Picker.Item key={`${i}-${element.name}-origin`}  label={`${element.name} - Av ${element.district},${element.state}`}  value={`${element.name} - Av ${element.district},${element.state}`}  />
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
                <View style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"center"}}>
                    <View style={{backgroundColor:"white", width:"95%",height:"auto", borderRadius:10}}>
                        {/* <Picker
                            selectedValue={item}
                            onValueChange={(value, index) => this.changeValue(value,index)}
                        >
                            {rows}
                        </Picker> */}
                        <ScrollView  style={{width:"100%"}}>
                             {rows}
                            <Text onPress={()=>closeModalAdresses()} >WTF</Text>
                        </ScrollView>
                    </View>
                </View>
        )
    }
}
