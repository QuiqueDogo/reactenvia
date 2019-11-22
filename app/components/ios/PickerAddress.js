import React, { Component } from 'react';
import { View, Text, StyleSheet,Modal, TouchableOpacity, SafeAreaView,Picker } from 'react-native';


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
      var changeValueDistrict = this.props.changeValueDistrict;

    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={() => {this.setState({visibleModal:true})}}>
            <Text style={styles.text}>{data[0]}</Text>
        </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={visibleModal}>
        <TouchableOpacity style={{flex:1,paddingTop:40,backgroundColor:"rgba(0,0,0,0.23)", alignItems:"center",justifyContent:"flex-end"}} onPressIn={()=>{this.setState({visibleModal:false})}}>
            <View style={{ backgroundColor:"white",width:"100%", borderBottomWidth:1, borderColor:"#e2e2e2", height:50, flexDirection:"row" , justifyContent: "space-around"}} >
                        <TouchableOpacity style={{ width:"20%", alignItems:"center",justifyContent:"center",}} onPress={()=>{this.setState({visibleModal:false})}} >
                            <Text style={{fontSize:17, color:"red"}}>Cancelar</Text>
                        </TouchableOpacity>
                        <View style={{ width:"20%", alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:15, }}>Colonia</Text>
                        </View>
                        <TouchableOpacity style={{ width:"20%", alignItems:"center",justifyContent:"center"}} onPress={()=>{this.setState({visibleModal:false})}}>
                            <Text style={{fontSize:17, color:"#0d8ee9"}}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:"white", width:"100%",height:"auto",}}>
                        <Picker 
                        selectedValue={value}
                        onValueChange={(item, index)=> changeValueDistrict(item,index)}
                        >  
                            {data
                            .map((val,id) => {
                            return <Picker.Item key={id+val} label={val} value={id}/>
                            })}
                        </Picker>
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
    }
})