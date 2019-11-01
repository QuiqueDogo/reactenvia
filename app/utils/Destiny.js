import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView,Image,Animated } from 'react-native'
import HeaderHome from "../components/HeaderHome";
import { LinearGradient } from 'expo-linear-gradient';

HEADER_MAX_HEIGHT=120;
HEADER_MIN_HEIGHT=70;
PROFILE_IMAGE_MAX_HEIGHT=80;
PROFILE_IMAGE_MIN_HEIGHT=40;

export default class Destiny extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         scrollY: new Animated.Value(0)
      };
    };
    
    static navigationOptions ={
        header:null
      };
    render() {
        const headerHeigth = this.state.scrollY.interpolate({
            inputRange:[0,40],
            outputRange:[150,80],
            extrapolate:"clamp"
        });
        const letterHeight = this.state.scrollY.interpolate({
            inputRange:[0,40],
            outputRange:[100,30],
            extrapolate:"clamp"
        })
        const opacity = this.state.scrollY.interpolate({
            inputRange:[0,40],
            outputRange:[1,0],
            extrapolate:"clamp"
        })
        return (
            <View style={{flex:1}}>
                <Animated.View style={{position:"absolute",
                        top:0,
                        left:0,
                        right: 0,
                        backgroundColor:"#01527999",
                        height:headerHeigth
                }} >
                </Animated.View>
                <ScrollView style={{flex:1}} scrollEventThrottle={16} onScroll={
                    Animated.event([{nativeEvent :{contentOffset:{y:this.state.scrollY}}}]
                    )}>
                    <Animated.View style={{position:"absolute",left:170,width:"100%", marginTop:70, opacity:opacity}}>
                        <Text style={{color:"white",fontSize:22}}>Destino</Text>
                    </Animated.View>
                    <Animated.View style={{position:"absolute",top:letterHeight ,left:170,width:"100%", marginTop:70}}>
                        <Text style={{color:"black",fontSize:22}}>Destino</Text>
                    </Animated.View>
                <View style={{height:1000,borderWidth:1,width: "100%",}}>

                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gradiantHome:{
        position:"absolute",
        top:0,
        left:0,
        bottom:0,
        right: 0,
        height:150

    }
})