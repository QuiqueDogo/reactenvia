import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


export default class PickerPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
//we
  render() {
      const{title, value} = this.props;
      const ModalPickerVisible = this.props.ModalPickerVisible
    return (
        <TouchableOpacity style={styles.container} onPress={() => ModalPickerVisible(value)}>
        <Text style={styles.textLabel}>{title}</Text>
          <View style={{flexDirection:"row" , width:"100%", alignItems:"center", height:30}}>
            <Text style={{marginLeft:15,color: '#38b3b9'}}>{value}</Text>
            <Icon containerStyle={{marginRight:15,marginLeft:"auto"}} name="chevron-down" type="font-awesome" size={15}/>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      paddingTop:5,
      width:"45%", 
      borderColor:"#dbdbdb",
      borderWidth:1,
      borderRadius:10
    },
    textLabel:{
      backgroundColor:"rgba(255,255,255,1)",
      width:"auto",
      paddingHorizontal:10,
      position:"absolute",
      top:-10,
      left:6,
      color:"#38b3b9",
      fontWeight:"200",
      zIndex:1
    },
})