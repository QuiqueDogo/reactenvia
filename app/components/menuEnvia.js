import React, { Component } from 'react'
import { Text, View,Animated, BackHandler, Platform} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";

export default class MenuEnvia extends Component {
    constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      this.animatedValue = new Animated.Value(0);
      this.AnotherOne = new Animated.Value(0);
      this.state = {
        disabled: false,
        fade :new Animated.Value(1),
        back: false
    };
    this.toggleFlag = 0;
    };

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
      if (this.state.back === true){
        this.setState({back:false});
        this.toggleDrawer();
        return true
      }
    }

    _start = (value) => {
        Animated.timing(this.state.fade, {
          toValue: value,
          duration: 300
        }).start();
      };
    
      toggleDrawer = () => {
        if (this.toggleFlag == 0) {
          this._start(0);
          this.setState({ disabled: true }, () => {
            Animated.timing(
              this.animatedValue,
              {
                toValue: 1,
                duration: 275
              }
              ).start(() => {
                this.setState({ disabled: false,  });
                this.setState({back:true})
                this.toggleFlag = 1;
            });
          });
        }
        else {
          this.props.overlay(0);
          this.setState({ disabled: true }, () => {
            Animated.timing(
              this.animatedValue,
              {
                toValue: 0,
                duration: 275
              }
            ).start(() => {
              this.setState({ disabled: false });
              this.toggleFlag = 0;
            });
          });
        }
      }
    
    test = () => {
   
    }
  
    render() {
        const animatedValue = this.animatedValue.interpolate(
            {
              inputRange: [0, 1],
              outputRange: [0, -300]
            });
    
        const { MyfFinalMessage} = this.props
        const stylesMenu = ( Platform.OS =="ios") ?styles.menu : styles.menuAndroid ;
        return (
                <View style={stylesMenu}>
                  <View style={{flex: 1,width:"100%", flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                      <Icon name="bars" type="font-awesome" size={34}/>
                      <Animated.View style={{opacity: this.state.fade}}>
                        <Icon name="dropbox" type="font-awesome" size={34} onPress={() => {MyfFinalMessage("Generate"); this.test()}}/>
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
                  </View>
                  <View style={styles.drawer}>
                          <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias" icon={{name:"dropbox",type:"font-awesome", size:34}} onPress={() => MyfFinalMessage("Generate")} />
                          <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias 2" icon={{name:"inbox",type:"font-awesome", size:34}} />
                          <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12, marginRight:14}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Vamonos" icon={{name:"map-marker",type:"font-awesome", size:34}} />
                          <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="wtf" icon={{name:"cog",type:"font-awesome", size:34}} />
                  </View>
              </View>
        )
    }
}
