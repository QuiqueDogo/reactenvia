import React, { Component } from 'react';
import { View, StyleSheet,Animated, TextInput } from 'react-native';


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
    componentDidMount(){
        if (this.props.onRef) {
            this.props.onRef(this)
        }
    }

    componentWillUnmount() {
        if (this.props.onRef) {
        this.props.onRef(undefined)
        }
    }

    checkvalue(){
        if(this.props.value === ""){
            this.AnimatedEmpty();
        }
    }

    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === "" ? 0 :1);
        this.animatedValue = new Animated.Value(0);
      }

    handleFocus = () => { this.props.ChangeKeyBoard() ,this.setState({ isFocused: true });}
    handleBlur = () => {this.setState({ isFocused: false }), this.AnimatedEmpty()};
    
    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
          toValue: (this.state.isFocused === true || this.props.value !== "" ) ? 1 : 0,
          duration: 200,
        }).start();
      };

    AnimatedEmpty(){
        if(this.props.value.length === 0){
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 650,
            }).start();
        }else if(this.props.value.length !== 0){
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 650,
            }).start();
        }
    }

    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange:[0,1],
            outputRange:["rgba(219,219,219,1.0)","rgba(216,89,89,0.5)"]
        });
        const { label,size, ...props } = this.props;
        const {text,bigger} = this.state;
        const container = {
            height:48,
            width: "100%",
            borderWidth:1,
            borderRadius:10,
            borderColor:interpolateColor,
            paddingLeft: 2,
            paddingTop: 2,
            marginTop:18,   
        };
        const containerMiddle = {
            height:48,
            width: "48%",
            borderWidth:1,
            borderRadius:10,
            borderColor:interpolateColor,
            paddingLeft: 2,
            paddingTop: 2,
            marginTop:18,   
        };
        const labelStyle = {
            width: "auto",
            paddingHorizontal: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[0,15]
            }),
            backgroundColor:this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 1)"]
            }),
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
          
            <Animated.View style={(!size) ? container : containerMiddle}>
                <Animated.Text style={(!size) ? labelStyle : labelStyleCP}>{label}</Animated.Text>
                <TextInput {...props}  style={styles.input} secureTextEntry={text} onFocus={this.handleFocus} onBlur={this.handleBlur} blurOnSubmit/>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:48,
        width: "100%",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#dbdbdb",
        paddingLeft: 2,
        paddingTop: 2,
        marginTop:18,   
    },
    containerMiddle: {
        height:48,
        width: "48%",
        borderWidth:1,
        borderRadius:10,
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

