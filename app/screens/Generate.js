import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import MenuEnvia from "../components/menuEnvia";
import HeaderHome from "../components/HeaderHome";
import BoxMoney from '../components/boxMoney';
import styles from "../../assets/css/stylesGenerate";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CardView from 'react-native-cardview'

export default class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
      };
  
      static navigationOptions ={
        header:null
      };

      MyfFinalMessage = (changedaworld) =>{
        this.props.navigation.navigate(changedaworld)
      }
  
      renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
              <MenuEnvia MyfFinalMessage={this.MyfFinalMessage.bind(this)}/>
          </View>
        </View>
      )
    
    fall =new Animated.Value(1);  

    render() {
        return (
            <View style={styles.containerRegister}>
                <BottomSheet 
                    snapPoints = {[300, 100]}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledInnerScrolling={false}
                    onOpenStart={()=>console.log("hola")}
                    />
                <Animated.View style={[styles.containerRegister,{opacity: Animated.add(0.1, Animated.multiply(this.fall, 0.9))}]} >
                    <HeaderHome title="Generar Guias" user="" pag="Generate" />
                        <View style={styles.divisionHome}>
                        <BoxMoney balance="3,000 MXN"/>
                            <CardView style={{flex:0.80,width:"90%",backgroundColor:"white"}} cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
                                <View style={{flex:1,}}></View>
                                <View style={{flex:1,borderWidth:1}}></View>
                                <View style={{flex:1.6,borderWidth:1}}></View>
                            </CardView>
                        </View>
                        
                </Animated.View>
            </View>
        )
    }
}

