import React, { Component } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native';
import {  } from 'react-native-gesture-handler';

export default class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {valueContent,valueweigth,type} = this.props;
    const ModalPickerVisible = this.props.ModalPickerVisible;
    const changeValuePackage = this.props.changeValuePackage;
    const ModalPickerAnd = this.props.ModalPickerAnd;
    const rows = [];
    const content = ["Paquete", "Tarima"];
    const contentweight = ["cm", "in"];
    let stylesButton = {
      backgroundColor:"#fff",
      width:"100%",
      height:50,
      padding:15,
     };
    
    if(type === "content"){
      content.forEach((element,index) => {
          rows.push(
              <TouchableOpacity style={stylesButton} key={element+index} onPress={() => ModalPickerAnd(index, type)}>
                <Text>{element}</Text>
              </TouchableOpacity>
          );
      });
    }else if(type === "weigth"){
      contentweight.forEach((element,index) => {
          rows.push(
            <TouchableOpacity style={stylesButton} key={element+index} onPress={() => ModalPickerAnd(index, type)}>
              <Text>{element}</Text>
            </TouchableOpacity>
          );
      });
    }
    return (
        <TouchableOpacity style={styles.background} onPress={() => ModalPickerVisible()} >
          <View style={styles.content} >
            {rows}
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  background:{
      flex:1,
      paddingTop:40,
      backgroundColor:"rgba(0,0,0,0.23)", 
      alignItems:"center",
      justifyContent:"center"
  },
  content:{ 
      backgroundColor:"white",
      width:"90%",
      borderBottomWidth:1,
      borderColor:"#e2e2e2",
      height:"15%",
      justifyContent: "space-around"
  },
  title:{ 
      width:"20%", 
      alignItems:"center",
      justifyContent:"center"
  }
})