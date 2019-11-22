import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={{width:150, borderColor:"#dbdbdb"}} onPress={() => ModalPickerVisible()}>
        <Text style={{color:"#004b74" }}>{title}</Text>
          <View style={{flexDirection:"row" ,borderBottomWidth:1, width:"100%", alignItems:"center" ,justifyContent:"space-between",height:30, backgroundColor:"#dbdbdb"}}>
            <Text style={{marginLeft:5}}>{value}</Text>
            <Icon containerStyle={{marginRight:15}} name="chevron-down" type="font-awesome" size={15}/>
          </View>
        </TouchableOpacity>
    );
  }
}
