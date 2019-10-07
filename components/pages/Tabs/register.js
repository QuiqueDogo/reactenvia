import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Register extends Component {
    static navigationOptions = {
        tabLabel : 'Tab2'
    }
    render(){
        return(
            <View>
                <Text>Hola desde la tabla 2</Text>
            </View>
        )
    }
}