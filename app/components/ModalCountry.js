import React, { Component } from 'react'
import { Text, View, Modal, Button } from 'react-native'

export default class ModalCountry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          title:"hola"
      };
    };

    setModalVisible = (info) => {
        this.setState({ modalVisible: info})
    }

    render() {
        const { ...props} = this.props
        return (
                <View style={{flex:1,paddingTop:30}}>
                    <Button {...props} type="puto" title="hola we" />
                </View>
        )
    }
}
