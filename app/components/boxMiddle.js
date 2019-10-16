import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from "../../assets/css/stylesMain";
import {ProgressBar,Colors} from 'react-native-paper';

export default class BoxMiddle extends Component {
    
    render() {
        return (
            <View style={styles.boxMiddle}>
                <Text style={{flex:1,fontSize: 18, textTransform:"uppercase"}}>Refiere y Gana</Text>
                <Text style={{flex:3,fontSize: 13, textAlign:"justify"}}>Por cada referido que realiace una recarga de $1,000.00 o más, obtendras $500.00 en tu cuenta de envia.com, ademas tu refereido obtendrá $100.00.</Text>
                <ProgressBar style={{flex:1,width:"100%"}} progress={0.5} color={Colors.cyan400} />
            </View>
        );
    }
}
