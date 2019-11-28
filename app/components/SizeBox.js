import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,Animated } from 'react-native'
import { Platform } from '@unimodules/core'
import { Input } from 'react-native-elements'

export default class SizeBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFocused:false       
        }
    }

    componentDidMount(){
        if (this.props.onRef) {
            this.props.onRef(this);
        }
    }

    componentWillMount(){
        if (this.props.onRef) {
            this.props.onRef(undefined);
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
            duration: 100,
        }).start();
    };
  
    AnimatedEmpty(){
        if(this.props.value.length === 0){
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 150,
            }).start();
        }else if(this.props.value.length !== 0){
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 150,
            }).start();
        }
    }



    render() {
        const {holder,type, dimensions, typeWeigth, label,value,size, ...props} = this.props 
        const ChangeText = this.props.ChangeText
        const ChangeVolum = this.props.ChangeVolum
        const interpolateColor = this.animatedValue.interpolate({
            inputRange:[0,1],
            outputRange:["rgba(219,219,219,1.0)","rgba(216,89,89,0.5)"]
        });
        const {text,bigger} = this.state;
        const container = {
            height:48,
            width: "20%",
            borderWidth:1,
            borderRadius:10,
            borderColor:interpolateColor,
            paddingLeft: 2,
            paddingTop: 2,
            marginTop:5,   
        };
        const labelStyle = {
            width: "auto",
            paddingHorizontal: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[0,4]
            }),
            backgroundColor:this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 1)"]
            }),
            position: 'absolute',
            left:this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[13,8]
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
            <Animated.View style={ container }>
                <Animated.Text style={labelStyle}>{label} </Animated.Text>
                <Text style={styles.textStyle}>{type} </Text>
                <TextInput keyboardType="number-pad" value={value} placeholder={holder} placeholderTextColor="#39c4cb" style={styles.input} onChangeText={text => ChangeText(dimensions, text)} onFocus={this.handleFocus} onBlur={this.handleBlur} maxLength={4}/>
            </Animated.View>
        )
    }
}

const styles= StyleSheet.create({
    input:{
        width:"100%",
        paddingLeft:15,
        paddingTop:10,
        fontSize:18
    },
    textStyle:{
        color:"#39c4cb",
        position:"absolute",
        right:-8,
        bottom:-15,
        width:30,
        height:27,
        backgroundColor:"white",

        zIndex:1,
        textAlign:"center",
    }
})