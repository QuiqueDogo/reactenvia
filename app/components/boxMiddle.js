import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {ProgressBar,Colors} from 'react-native-paper';

export default class BoxMiddle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        percentage: parseFloat( this.props.percentage)
      };
    };
    
    render() {
        const {percentage} = this.state
        const colorIcon1 = (percentage >= 0.1) ?"#00b3bc" : "#cdd4da"; 
        const colorIcon2 = (percentage >=0.5) ? "#00b3bc" : "#cdd4da";
        const colorIcon3 = (percentage >=1) ? "#00b3bc" : "#cdd4da";
        return (
            <View style={styles.boxMiddle}>
                <View style={styles.viewCenter}>
                    <Text style={{fontSize: 18, textTransform:"uppercase", color:"#6a6a6a", fontWeight:"500",marginBottom:14 }}>Refiere y Gana</Text>
                    <Text style={{fontSize: 13, textAlign:"justify", color:"#7e7e7e"}}>Por cada referido que realiace una recarga de $1,000.00 o más, obtendras $500.00 en tu cuenta de envia.com, ademas tu refereido obtendrá $100.00.</Text>
                    <View style={styles.progressBar}>
                        <ProgressBar style={{width:"100%",marginTop: "auto",marginBottom: "auto",}} progress={percentage} color={Colors.cyan400} />
                        <Icon raised={true} reverse containerStyle={styles.iconNum1} name="circle" type="font-awesome" color={colorIcon1} size={18}/>
                        <Icon raised={true} reverse containerStyle={styles.iconNum2} name="circle" type="font-awesome" color={colorIcon2} size={18}/>
                        <Icon raised={true} reverse containerStyle={styles.iconNum3} name="circle" type="font-awesome" color={colorIcon3} size={18}/>
                    </View>
                </View>
                    <Button title="Compartir" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonHome} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"share-alt", type:"font-awesome", size:26, color:"white",}} 
                    // onPress={() => this.props.navigation.navigate('verifyPage')}/>
                    onPress={() => console.log("hola")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxMiddle:{
        flex:2,
        marginTop: 20,
        marginBottom: 20,
        padding: 25,     
        width: "90%",
        alignItems: "flex-start",
        justifyContent:"flex-start",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor: "#000",
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 20,
        shadowOffset: {
          width: 0,
          height: 8,
        },
    },
    viewCenter:{
        flex:1,
    },
    progressBar:{
        padding:15,
        flex:1,
    },
    iconNum1:{
        position:"absolute",
        top: (Platform.OS == "android") ? "30%" : "40%"
    },
    iconNum2:{
        position:"absolute",
        top: (Platform.OS == "android") ? "30%" : "40%",
        left:"48%"
    },
    iconNum3:{
        position:"absolute",
        top: (Platform.OS == "android") ? "30%" : "40%",
        right:"-2%"
    },
    buttonHome:{
        position:"absolute",
        bottom:"-16%",
        left: (Platform.OS == "android") ? "14%" : "18%",
    },
    buttonStyleRegister:{
        borderWidth: 1,
        borderColor: '#02b2bc',
        borderRadius: 30,
        backgroundColor:'#02b2bc',
        height:60,
        width:250
    }
})