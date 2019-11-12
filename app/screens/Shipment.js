import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../assets/css/StylesGenerateGuide';
import HeaderHome from "../components/HeaderHome";

export default class Shipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions ={
    header:null
  };

  componentDidMount(){
    this.GetShipment()
  }

  GetShipment = async () => {
    // let ruta = ""
  }

  render() {
    return (
    <View style={styles.containerRegister}>
        <HeaderHome title="Shipment" user="" pag="Generate" />
        <View style={styles.Division}>
            <View style={styles.cardGenerate}>
                <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
                  
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}
