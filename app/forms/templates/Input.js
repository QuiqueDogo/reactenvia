import React from 'react'
import { StyleSheet, View, } from 'react-native';
import {Icon,Input, Text} from "react-native-elements";
import FloatingLabel from 'react-native-floating-labels'

export default (inputTemplate = locals =>{
    return(
        <View style={styles.containerino}>
            <FloatingLabel styles={styles.container}  inputStyle={styles.inputStyles} labelStyle={styles.inputOut} password={locals.config.password} secureTextEntry={locals.config.secureTextEntry} onChangeText={value => locals.onChange(value)}>{locals.config.text}</FloatingLabel>
            {/* <Input password={locals.config.password} secureTextEntry={locals.config.secureTextEntry} style={styles.inputOut} inputStyle={styles.inputText} inputContainerStyle={styles.inputStyles} placeholder={locals.config.placeholder} placeholderTextColor="#38b3b9" onChangeText={value => locals.onChange(value)} /> */}
        </View>
    )
});

const styles =StyleSheet.create({
    inputStyles:{
        borderWidth:1,
        borderRadius:15,
        width:"100%",
        height:50,
        paddingLeft: 14,
        borderColor:"#dbdbdb",
        marginTop:18,
        fontSize:15,
        fontWeight:"200",
    },
    containerino:{
        paddingTop:10,
    },
    inputOut: {
        color:"#38b3b9",
        backgroundColor:"white",
        width:250,
        fontSize: 15
    },
});