import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated, TextInput } from 'react-native';
import { Input } from 'react-native-elements';


export default class InputForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isFocused: false,
         text: this.props.text === "true" ?  true :false,
         size: this.props.size,
         bigger: !this.props.bigger ? 90 : 110
      };
    };
    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === "" ? 0 :1);
      }

    handleFocus = () => { this.setState({ isFocused: true });}
    handleBlur = () => this.setState({ isFocused: false });

    chequeo = () => console.log(this)
    
    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
          toValue: (this.state.isFocused === true || this.props.value !== "" ) ? 1 : 0,
          duration: 200,
        }).start();
      };

    render() {
        const { label,size, ...props } = this.props;
        const {isFocused,text,bigger} = this.state
        const labelStyle = {
            width: (label.length <= 7) ? 60: bigger,
            backgroundColor:"#fff",
            position: 'absolute',
            left:this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[13,10]
            }),
            top :this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[12,-6],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[15,12]
            }),
            color: '#38b3b9',
            textAlign: "center",
            fontWeight:"200",
          };
          const labelStyleCP = {
            width: (label.length <= 7) ? 60: 100,
            backgroundColor:"#fff",
            position: 'absolute',
            left:this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[13,10]
            }),
            top :this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[12,-6],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[15,12]
            }),
            color: '#38b3b9',
            textAlign: "center",
            fontWeight:"200",
          };
        return (
          
            <View style={(!size) ? styles.container : styles.containerMiddle}>
                <Animated.Text style={(!size) ? labelStyle : labelStyleCP}>{label}</Animated.Text>
                <TextInput {...props}  style={styles.input} secureTextEntry={text} onFocus={this.handleFocus} onBlur={this.handleBlur} blurOnSubmit/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:48,
        width: "100%",
        borderWidth:1,
        borderRadius:15,
        borderColor:"#dbdbdb",
        paddingLeft: 2,
        paddingTop: 2,
        marginTop:18,   
    },
    containerMiddle: {
        height:48,
        width: "48%",
        borderWidth:1,
        borderRadius:15,
        borderColor:"#dbdbdb",
        paddingLeft: 2,
        paddingTop: 2,
        marginTop:18,
        
    },
    input:{
        borderBottomWidth:0,
        color:"black",
        fontSize:15, 
        fontWeight:"200",
        marginBottom:"auto",
        marginTop:"auto",
        paddingLeft:17,
        height:"100%"
    },
    
});

