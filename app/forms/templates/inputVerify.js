import React from 'react'
import { StyleSheet, View,  } from 'react-native';
import {Icon,Input,Text} from "react-native-elements";


export default (inputTemplate = locals =>{
   
    return(
        <View style={styles.box}>
            {locals.config.placerHolder == "Calle" &&
                <Text style={styles.textLabel}>{locals.config.label}</Text>
            }
            <Input style={styles.inputOut} inputStyle={styles.inputText} inputContainerStyle={styles.inputStyles} placeholder={locals.config.placerHolder} placeholderTextColor="#38b3b9" />
        </View>
    )
});

const styles =StyleSheet.create({
    box:{
        marginTop: 13,
        marginBottom:13
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
        fontSize:14,
        fontWeight:"300",
    },
    inputOut:{
        letterSpacing: 1.4
    },
    textLabel:{
        paddingLeft:15,
        marginBottom:10,
        color:"#979797"
    }

});