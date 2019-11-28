import React, { Component } from 'react';
import { View, Text, StyleSheet,Modal, TouchableOpacity, SafeAreaView,Picker, TouchableNativeFeedbackBase, ScrollView } from 'react-native';


export default class PickerAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.data,
      visibleModal:false,
    };
  }



  render() {
      const {value} = this.props
      const {data, visibleModal} = this.state;
      const AddressCheck = this.props.AddressCheck;
      const rows = [];

      data.forEach((element, index) => {
          rows.push(
            <View key={element+index}>   
                <TouchableOpacity style={styles.stylesButton}    
                onPress={() => {AddressCheck(element,index),this.setState({visibleModal:false})}} 
                >
                    <Text style={{textTransform:"uppercase", fontWeight:"400"}}>{element}</Text>
                </TouchableOpacity>
            </View>
          )
      });

    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={() => {this.setState({visibleModal:true})}}>
            <Text style={styles.text}>{data[value]}</Text>
        </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={visibleModal}>
        <TouchableOpacity style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"center"}} onPressIn={()=>{this.setState({visibleModal:false})}}>
            <View style={{ backgroundColor:"white",width:"90%", borderBottomWidth:1, borderColor:"#e2e2e2", height:"40%", flexDirection:"row" , justifyContent: "space-around"}} >
              <ScrollView>
                  {rows}
              </ScrollView>
              </View>
          </TouchableOpacity>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        borderColor:"#dbdbdb",
        borderWidth:1,
        width:"100%",
        height:48,
        backgroundColor:"#fff",
        marginTop:18,
    },
    dropdown:{
        borderColor:"#dbdbdb",
        borderWidth:1,
        width:"80%",
        backgroundColor:"#fff",
    },
    text:{
        color:"#38b3b9",
        fontWeight:"200",
        fontSize:16,
        marginTop:12,
        marginLeft:13
    },
    texhighligth:{
        color:"black"
    },
    stylesButton: {
      backgroundColor:"#fff",
      width:"100%",
      height:50,
      padding:15,
  }
})