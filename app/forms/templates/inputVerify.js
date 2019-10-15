import React from 'react'
import { StyleSheet, View, } from 'react-native';
import {Icon,Input} from "react-native-elements";


export default (inputTemplate = locals =>{
    return(
        <View style={styles.box}>
            <Input style={styles.inputOut} inputStyle={styles.inputText} inputContainerStyle={styles.inputStyles} placeholder="Hola" placeholderTextColor="#38b3b9" />
        </View>
    )
});

const styles =StyleSheet.create({
    box:{
        marginTop: 13,
    },
    inputStyles:{
        borderWidth:1,
        borderRadius:15,
        width:"85%",
        height:50,
        paddingLeft: 17,
        borderColor:"#dbdbdb",
    },
    inputText:{
        fontSize:20,
        fontWeight:"300",
    },
    inputOut:{
        letterSpacing: 1.4
    }
});