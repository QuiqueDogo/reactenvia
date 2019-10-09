import React, { Component } from 'react';
import { Text } from 'react-native';


export default class TextPlane extends Component {
    render(){
        const test = this.props;
        console.log(test)
        return(
            <Text style={{color:`${test.window}` === "1" ? "#00B3C1" : "#a3bfcd", marginLeft:30}}>{test.label}</Text>
        )
    }
}

