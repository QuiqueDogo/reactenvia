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
            <View style={{marginTop:15,borderColor:"red",borderWidth: 1}}>
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
                <ButtonSubmit style={styleSession.buttonsubmit} />
            </View>
        )
    }
}

const styleSession = StyleSheet.create({
    submitRegister:{
        flex:1,
        height: 50,
        width: "90%",
        marginLeft: 25,
        marginTop:15,
        paddingLeft: 15,
        backgroundColor:'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a3bfcd'
      },
    buttonsubmit:{
        position:"absolute",
        left:150
    }
})