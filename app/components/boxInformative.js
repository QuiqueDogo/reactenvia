import React, { Component } from 'react';
import { View, Text ,ActivityIndicator} from 'react-native';
import { Image } from 'react-native-elements';
import styles from '../../assets/css/stylesMain';

export default class BoxInformative extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         infoTitle:`${this.props.infoTitle}`,
         price: `${this.props.price}`
      };
    };
    
    render() {
        const {infoTitle,price} = this.state
        return (
            <View style={styles.containerBoxInformative}>
                    <Image PlaceholderContent={<ActivityIndicator />} style={styles.imageStyle} source={require('../../assets/img/anotherOne.png')}>
                        <Text  style={styles.textOneBox}>{infoTitle}</Text>
                        <Text style={styles.textTwoBox}>{price}</Text>
                    </Image>
            </View>
        );
    }
}

