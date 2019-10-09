import React, { Component } from 'react';
import {View, TouchableOpacity, Animated, Text} from 'react-native';

export default class TabsSelection extends Component {
    render(){
        const test = this.props;
        console.log(test)
        return(
            <View style={{flexDirection:"row",marginTop:14,marginBottom:20,
                 height:36, position:"relative"}}>
                    <Animated.View className="tabIndicator" style={{position: "absolute",
                      width: "34%",
                      height: "6%",
                      top: 35,
                      left:10,
                      backgroundColor: "#00B3C1",
                      transform:[{
                        translateX
                      }]
                      }} />
                      <TouchableOpacity 
                      style={stylesRegister.touchable1} 
                      ref="loginTab"
                      onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x, translateX : new Animated.Value((active === 0) ? event.nativeEvent.layout.x : 0)})}
                      onPress= {() => this.setState({active:0}, ()=> this.handleSlide(xTabOne) )} 
                      >
                        <Text style={{color: active === 0 ? "#00B3C1" : "#a3bfcd" }}>Inicia Sesión</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="registerTab"
                      ref="registerTab"
                      style={stylesRegister.touchable2}
                      onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x, translateX : new Animated.Value((active === 1) ? event.nativeEvent.layout.x : 0)})}
                      onPress= {() => this.setState({active:1}, ()=> this.handleSlide(xTabTwo) )}
                      >
                        <Text style={{color:  active === 1 ? "#00B3C1" : "#a3bfcd", marginLeft:30}}>Registrate</Text>
                        {/* <TextPlane  window={`${active}`} label="Registrate"></TextPlane> */}
                      </TouchableOpacity>
                  </View>
        )
    }
}
