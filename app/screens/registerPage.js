import React, { Component } from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';
import  TabsSelection  from "../components/TabsSelection";
import styles from "../../assets/css/stylesMain";
import Header from "../components/Header"

export default class registerPage extends Component {
    constructor(props) {
     super(props);
   }
   static navigationOptions ={
    header:null
    }
   render() {
     // const value = this.props.navigation.state.params.item
     return (
             <View style={styles.containerRegister}>
                 <Header />
                   <View style={styles.division}>
                   <TabsSelection item="register"/>			
                   <Button  onPress={() => this.props.navigation.navigate('contRegisterPage')} />   
                   <Button  title="atras" onPress={() => this.props.navigation.goBack()} />      
                   </View>
 
             </View>
         );
     }
 }