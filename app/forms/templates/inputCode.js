import React from 'react'
import { StyleSheet, View, } from 'react-native';
import {Icon,Input} from "react-native-elements";

export default (inputTemplate = locals =>{
    // console.log(locals.config)
    return(
        <View>
            <Input maxLength={1} style={styles.inputOut} inputStyle={styles.inputText} inputContainerStyle={styles.inputStyles} placeholder="·" placeholderTextColor="#38b3b9" />
        </View>

    )
});

const styles =StyleSheet.create({
    inputStyles:{
        borderWidth:1,
        borderRadius:15,
        width:60,
        height:70,
        paddingLeft: 27,
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