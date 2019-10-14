import React from 'react'
import { StyleSheet, View, } from 'react-native';
import {Icon,Input} from "react-native-elements";

export default (inputTemplate = locals =>{
    return(
        <View>
            <Input password={locals.config.password} secureTextEntry={locals.config.secureTextEntry} style={styles.inputOut} inputStyle={styles.inputText} inputContainerStyle={styles.inputStyles} placeholder={locals.config.placeholder} placeholderTextColor="#38b3b9" onChangeText={value => locals.onChange(value)}/>
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
    },
    inputText:{
        fontSize:14,
        fontWeight:"300",
    },
    inputOut:{
        letterSpacing: 1.4
    }
});