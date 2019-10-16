import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BoxInformative extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{padding:20,}}>Total De Envios</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: 25,
        marginTop:"auto",
        marginBottom:"auto",
        marginLeft: 15, 
        marginRight: 35,    
        width: "30%",
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        height: "70%" ,
    },
});

