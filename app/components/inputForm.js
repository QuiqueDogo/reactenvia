import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';
import { Input } from 'react-native-elements';

export default class InputForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isFocused: false
      };
    };
    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
      }

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });
    
    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
          toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
          duration: 200,
        }).start();
      };

    render() {
        const { label, ...props } = this.props;
        const {isFocused} = this.state
        const labelStyle = {
            width:80,
            backgroundColor:"#fff",
            position: 'absolute',
            left:!isFocused ? 13 : 10,
            // top: !isFocused ? 12 : -6,
            top :this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[12,-6],
            }),
            fontSize: !isFocused ? 15 : 12,
            color: '#38b3b9',
            textAlign:"center",
            fontWeight:"200",
          };
        return (
            <View style={styles.container}>
                <Animated.Text style={labelStyle}>{this.props.label}</Animated.Text>
                <Input {...props} inputContainerStyle={styles.input} secureTextEntry={true} onFocus={this.handleFocus} onBlur={this.handleBlur} blurOnSubmit/>
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

