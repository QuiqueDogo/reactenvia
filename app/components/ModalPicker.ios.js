import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Picker } from 'react-native';

export default class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  
  render() {
      const {valueContent,valueweigth,type} = this.props;
      const ModalPickerVisible = this.props.ModalPickerVisible;
      const changeValuePackage = this.props.changeValuePackage
      const rows = [];
      const content = ["Paquete", "Tarima"];
      const contentweight = ["cm", "in"];
      if(type === "content"){
          content.forEach((element,index) => {
              rows.push(
                  <Picker.Item key={index+element} label={element} value={index}/>
              );
          });
      }else if(type === "weigth"){
        contentweight.forEach((element,index) => {
            rows.push(
                <Picker.Item key={index+element} label={element} value={index}/>
            );
        });
      }
    return (
    //   <View>
    //       <SafeAreaView>
    //         <TouchableOpacity onPress={() => ModalPickerVisible()}>
    //         <Text> ModalPicker.ios </Text>
    //         </TouchableOpacity>
    //       </SafeAreaView>
    //   </View>
    <TouchableOpacity style={styles.background} onPressIn={() => ModalPickerVisible()}>
                <View style={styles.content} >
                    <TouchableOpacity style={styles.title} onPress={() => ModalPickerVisible()} >
                        <Text style={{fontSize:17, color:"red"}}>Cancelar</Text>
                    </TouchableOpacity>
                    <View style={styles.title}>
                        <Text style={{fontSize:15, }}></Text>
                    </View>
                    <TouchableOpacity style={styles.title} onPress={() => ModalPickerVisible()}>
                        <Text style={{fontSize:17, color:"#0d8ee9"}}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:"white", width:"100%",height:"auto",}}>
                    <Picker
                        selectedValue={(type== "content")?valueContent:valueweigth}
                        onValueChange={(value) => changeValuePackage(value, type)}
                    >  
                        {rows}
                    </Picker>
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
        justifyContent:"flex-end"
    },
    content:{ 
        backgroundColor:"white",
        width:"100%",
        borderBottomWidth:1,
        borderColor:"#e2e2e2",
        height:50,
        flexDirection:"row" ,
        justifyContent: "space-around"
    },
    title:{ 
        width:"20%", 
        alignItems:"center",
        justifyContent:"center"
    }
})