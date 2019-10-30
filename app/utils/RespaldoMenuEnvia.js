import React, { Component } from 'react'
import { Text, View,Animated, BackHandler} from 'react-native';
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
          this.props.overlay(1);
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
          this._start(1);
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
    
            const { MyfFinalMessage,...props} = this.props
        return (
            <View style={{flex:2}}>

                <Animated.View style={[styles.menu,{transform:[{translateY: animatedValue}]}]}>
                    <Icon name="bars" type="font-awesome" size={34} onPress={this.toggleDrawer}/>
                    <Animated.View style={{opacity: this.state.fade}}>
                      <Icon name="dropbox" type="font-awesome" size={34} onPress={() => {MyfFinalMessage("Drawer"); this.test()}}/>
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
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias" icon={{name:"dropbox",type:"font-awesome", size:34}} onPress={() => MyfFinalMessage("Drawer")} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Generar Guias 2" icon={{name:"inbox",type:"font-awesome", size:34}} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12, marginRight:14}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="Vamonos" icon={{name:"map-marker",type:"font-awesome", size:34}} />
                  <Button titleStyle={styles.titleButton} iconContainerStyle={{ marginLeft:12}} buttonStyle={styles.buttonSub} containerStyle={styles.menuLayout} title="wtf" icon={{name:"cog",type:"font-awesome", size:34}} />
                </View>
              </Animated.View>
            </View>

              {/* <BottomDrawer downDisplay={dowmDisplay} containerHeight={heightDrawer} offset={1} startUp={false} onExpanded={()=>this.overlay(1)} onCollapsed={()=>this.overlay(0)} backgroundColor={backgrDrawer} roundedEdges={true} shadow={true}> */}
            //   <MenuEnvia MyfFinalMessage={this.MyfFinalMessage.bind(this)}  />
              {/* </BottomDrawer> */}
              {/* <MenuEnvia MyfFinalMessage={this.MyfFinalMessage.bind(this)} overlay={this.overlay.bind(this)} /> */}
        )
    }
}
