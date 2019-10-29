import React, { Component } from 'react'
import { Text, View,Animated } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";

export default class MenuEnvia extends Component {
    constructor(props) {
      super(props)
      this.animatedValue = new Animated.Value(0);
      this.AnotherOne = new Animated.Value(0);
      this.state = {
        disabled: false,
        fade :new Animated.Value(1),
    };
    this.toggleFlag = 0;
    console.log(this)
    };

    _start = (value,valueAnother) => {
        Animated.timing(this.state.fade, {
          toValue: value,
          duration: 300
        }).start();
        Animated.timing(this.AnotherOne,{
          toValue: valueAnother,
          duration: 300,
        }).start();
        console.log("hice algo")
      };
    
  
  
    render() {
        const animatedValue = this.animatedValue.interpolate(
            {
              inputRange: [0, 1],
              outputRange: [0, -300]
            });
    
            const { ...props} = this.props
        return (
            <View style={{flex:2}}>

                <Animated.View style={[styles.menu,{transform:[{translateY: animatedValue}]}]}>
                    <Icon name="bars" type="font-awesome" size={34} {...props}/>
                    <Animated.View style={{opacity: this.state.fade}}>
                      <Icon name="dropbox" type="font-awesome" size={34} />
                    </Animated.View>
                    <Animated.View style={{opacity: this.state.fade}}>
                      <Icon name="inbox" type="font-awesome" size={34}/>
                    </Animated.View>
                    <Animated.View style={{opacity: this.state.fade}}>
                      <Icon name="map-marker" type="font-awesome" size={34}/>
                    </Animated.View>
                    <Animated.View style={{opacity: this.state.fade}}>
                      <Icon name="cog" type="font-awesome" size={34}/>
                    </Animated.View>
                </Animated.View>
              <Animated.View style={[styles.drawer, { transform: [{ translateY: animatedValue }] }]}>
                <View style={styles.drawerContainer}>
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias" icon={{name:"dropbox",type:"font-awesome", size:34}} onPress={() => this.props.navigation.navigate("Drawer")} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias 2" icon={{name:"inbox",type:"font-awesome", size:34}} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12, marginRight:14}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Vamonos" icon={{name:"map-marker",type:"font-awesome", size:34}} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="wtf" icon={{name:"cog",type:"font-awesome", size:34}} />
                </View>
              </Animated.View>
            </View>
        )
    }
}
