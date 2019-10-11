import React, { Component } from 'react';
import { View,Button } from 'react-native-elements';

export class RealHomePagetool extends Component{
    constructor(props){
        super(props);
      console.log(this)
      } 
    render(){

        return(
            <View>
                <Button title="hola" ></Button>
            </View>
        )
    }
}