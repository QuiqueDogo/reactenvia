import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default class InputForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isFocused: false,
         label: `${this.props.label}`
      };
    };
    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });
    
    render() {
        const {isFocused,label} = this.state
        const labelStyle = {
            position: 'absolute',
            left: 13,
            top: !isFocused ? 12 : -6,
            fontSize: !isFocused ? 15 : 12,
            color: !isFocused ? '#aaa' : '#000',
          };
        return (
            <View style={styles.container}>
                <Text style={labelStyle}>{label}</Text>
                <Input inputContainerStyle={styles.input} secureTextEntry={true} onFocus={this.handleFocus} onBlur={this.handleBlur} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:48,
        width:"100%",
        borderWidth:1,
        borderRadius:15,
        borderColor:"#dbdbdb",
        paddingLeft: 2,
        paddingTop: 2,
        marginTop:18,
    },
    input:{
        borderBottomWidth:0
    }
});

