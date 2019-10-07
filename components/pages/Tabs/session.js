import React, { Component } from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default class Session extends Component {
    static navigationOptions = {
        tabLabel : 'Tab1'
    }
    render(){
        return(
            <View>
                <Text>Hola desde la tabla 1</Text>
            </View>
        )
    }
}