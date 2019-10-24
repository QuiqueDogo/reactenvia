import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class buttonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { ...props} = this.props
    return (
      <View>
          <Button {...props} buttonStyle={styles.buttonStyles}  titleStyle={styles.textButton} iconContainerStyle={styles.iconStyle} iconRight icon={{name:"chevron-down", type:"font-awesome",size:15,color:"#38b3b9"}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonStyles:{
        borderRadius:15,
        borderColor:"#dbdbdb",
        borderWidth:1,
        width:"100%",
        height:48,
        backgroundColor:"#fff",
        marginTop:18,
    },
    textButton:{
        color:"#38b3b9",
        fontWeight:"200",
        fontSize:16,
        marginLeft:13
    },
    iconStyle:{
        marginLeft:"auto"
    }
})
