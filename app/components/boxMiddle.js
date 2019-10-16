import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import {ProgressBar,Colors} from 'react-native-paper';

export default class BoxMiddle extends Component {
    
    render() {
        return (
            <View style={styles.boxMiddle}>
                <Text style={{flex:1,fontSize: 18, textTransform:"uppercase", color:"#6a6a6a", fontWeight:"500"}}>Refiere y Gana</Text>
                <Text style={{flex:4,fontSize: 13, textAlign:"justify", color:"#7e7e7e"}}>Por cada referido que realiace una recarga de $1,000.00 o más, obtendras $500.00 en tu cuenta de envia.com, ademas tu refereido obtendrá $100.00.</Text>
                <ProgressBar style={{flex:1,width:"100%"}} progress={0.5} color={Colors.cyan400} />
                <Button style={styles.buttonFloating} title="Compartir" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonHome} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"share-alt", type:"font-awesome", size:26, color:"white",}} 
                  // onPress={() => this.props.navigation.navigate('verifyPage')}/>
                  onPress={() => console.log("hola")}/>
            </View>
        );
    }
}
