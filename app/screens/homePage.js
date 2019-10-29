import React, { Component } from 'react';
import { Text, View, ScrollView,Animated,TouchableOpacity ,BackHandler} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from "../../assets/css/stylesMain";
import HeaderHome from "../components/HeaderHome";
import BoxMiddle from "../components/boxMiddle"
import BoxMoney from '../components/boxMoney';
import BoxInformative from '../components/boxInformative';
import MenuEnvia from "../components/menuEnvia";


export default class homePage extends Component{
    constructor(props) {
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      this.animatedValue = new Animated.Value(0);
      this.AnotherOne = new Animated.Value(0);
      this.state = { 
        disabled: false,
        fade :new Animated.Value(1),
        back: false
      }
      this.toggleFlag = 0;
    }
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
      console.log(this.state)
    }

    static navigationOptions ={
      header:null
    }

    _start = (value,valueAnother) => {
      Animated.timing(this.state.fade, {
        toValue: value,
        duration: 300
      }).start();
      Animated.timing(this.AnotherOne,{
        toValue: valueAnother,
        duration: 300,
      }).start();
    };
  

    toggleDrawer = () => {
      if (this.toggleFlag == 0) {
        this._start(0,1);
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
        this._start(1,0);
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

    render(){

      // const animatedValue = this.animatedValue.interpolate(
      //   {
      //     inputRange: [0, 1],
      //     outputRange: [0, -300]
      //   });
      
      const AnotherOne = this.AnotherOne.interpolate(
        {
          inputRange: [0, 1],
          outputRange: [1250,0]
        });

      return(
        <View style={styles.containerRegister}>
            <HeaderHome title="Bienvenido de nuevo" user="Usuario generico" page="Home" />
              <View style={styles.divisionHome}>
                <BoxMoney balance="3,000 MXN"/>
                <BoxMiddle percentage={0.3}/>
                <View style={styles.scrollHome}>
                  <ScrollView  horizontal >
                    <BoxInformative price={`1000`} infoTitle={`Total de Envios`}/>
                    <BoxInformative price={`$2000`} infoTitle={`Total de Paquetes`}/>
                    <BoxInformative price={`3000`} infoTitle={`Total de Videojuegos`}/>
                    <BoxInformative price={`4000`} infoTitle={`Total de Mercancia`}/>        
                  </ScrollView>
                </View>
              </View>
              <Animated.View  style={[styles.overlay,{transform:[{translateY: AnotherOne}]}]} />
              <MenuEnvia onPress={this.toggleDrawer}/>
                {/* 
              <Animated.View style={[styles.menu,{transform:[{translateY: animatedValue}]}]} />
                    <Icon name="bars" type="font-awesome" size={34} onPress={this.toggleDrawer}/>
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
              */}
        </View>
      )
    }
  }
  