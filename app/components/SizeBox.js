import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Platform } from '@unimodules/core'

export default class SizeBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {holder,type, dimensions, typeWeigth} = this.props 
        const ChangeText = this.props.ChangeText
        const ChangeVolum = this.props.ChangeVolum
        return (
            <View style={{ flex:0.2, }}>
                {typeof typeWeigth == "undefined" &&
                    <Text onPress={() => ChangeVolum("dimensions")} style={styles.textStyle}>{type}</Text>
                }
                {typeof typeWeigth !== "undefined" &&
                    <Text onPress={() => ChangeVolum("volum")} style={styles.textStyle}>{typeWeigth}</Text>
                }
                <TextInput placeholder={holder} placeholderTextColor="#39c4cb" style={styles.input} onChangeText={text => ChangeText(dimensions, text)} maxLength={3}/>
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
        paddingLeft:12,
        fontSize:18,
        fontWeight:"200"
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