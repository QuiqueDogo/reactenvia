import React, { Component } from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default class Register extends Component {
    render(){
        return(
            <View style={stylesSingup.container}>
                <TextInput 
                    style={stylesSingup.submitRegister}
                    placeholder="Nombre Completo"
                />
                <TextInput 
                    style={stylesSingup.submitRegister}
                    placeholder="Correo electronico"
                />
                <TextInput 
                    style={stylesSingup.submitRegister}
                    placeholder="Pais"
                />
                <TextInput 
                    style={stylesSingup.submitRegister}
                    placeholder="Telefono"
                />
                <TextInput 
                    style={stylesSingup.submitRegister}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
        )
    }
}

const stylesSingup = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent: 'space-around'
    },
    submitRegister:{
        height: 50,
        width: "90%",
        backgroundColor:'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a3bfcd',
        paddingLeft: 15
      },
})