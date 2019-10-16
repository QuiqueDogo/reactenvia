//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../assets/css/stylesMain';

// create a component
export default class boxMoney extends Component {
    constructor(props) {
        super(props)
        this.state = {
           balance: `${this.props.balance}`
        };
      };
    render() {
        const {balance} = this.state
        return (
            <View style={styles.cardHome}>
                <Text style={styles.textMoney}>{`$${balance}`}</Text>
            </View>
        );
    }
}

