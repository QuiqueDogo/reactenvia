import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Platform } from '@unimodules/core'
import { Input } from 'react-native-elements'

export default class SizeBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {holder,type, dimensions, typeWeigth, value} = this.props 
        const ChangeText = this.props.ChangeText
        const ChangeVolum = this.props.ChangeVolum
        return (
            <View style={{ flex:0.6, }}>
                <Text onPress={() => ChangeVolum(type)} style={styles.textStyle}>{type}</Text>
                <Input value={value} placeholder={holder} placeholderTextColor="#39c4cb" inputContainerStyle={styles.input} onChangeText={text => ChangeText(dimensions, text)} maxLength={4}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    input:{
        borderWidth:1,
        height:53,
        borderRadius:15,
        borderColor:"#cecece",
        paddingLeft:13,
        width:70
    },
    textStyle:{
        color:"#39c4cb",
        position:"absolute",
        right:8,
        top: Platform.OS === "ios" ? "27%" : "35%",
        width:30,
        height:27,
        backgroundColor:"white",
        zIndex:1,
        textAlign:"center"
    }
})