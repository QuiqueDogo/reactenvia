import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import ButtonSubmit from "./ButtonSubmit";



export default class Session extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Prueba", pass: "Pass" };
      }
    render(){
        return(
            <View style={styleSession.container}>
                <TextInput 
                style={styleSession.submitRegister}
                onChangeText={name => this.setState({ name })} 
                value={this.state.name}
                />
                <TextInput 
                style={styleSession.submitRegister}
                onChangeText={pass => this.setState({ pass })} 
                value={this.state.pass}
                />
                <ButtonSubmit style={styleSession.buttonsubmit}/>
            </View>
        )
    }
}

const styleSession = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:"100%",
        flexDirection:"column",
        justifyContent:"space-around",
        borderWidth:1,
        borderColor:"red",
    },
    submitRegister:{
        height: 50,
        width: "90%",
        backgroundColor:'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a3bfcd'
      },
    buttonsubmit:{
        position:"absolute",
        left:150,
        textAlign:"center"
    }
})