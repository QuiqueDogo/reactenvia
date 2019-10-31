import React, { Component } from 'react';
import { Text, View,TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import MenuEnvia from "../components/menuEnvia";
import HeaderHome from "../components/HeaderHome";
import BoxMoney from '../components/boxMoney';
import styles from "../../assets/css/stylesGenerate";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from "../components/LocationItem";


const data = [
  "Apples",
  "Broccoli",
  "Chicken",
  "Duck",
  "Eggs",
  "Fish",
  "Granola",
  "Hash Browns",
];

export default class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          DataState: data 
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
                            <View style={styles.infoGenerate} >
                                <View style={styles.boxes}>
                                  <View style={styles.boxsubTitle}>
                                    <Text style={styles.subTitle}>Origen</Text>
                                  </View>
                                  <View style={{flex:2,flexDirection:"row",justifyContent: 'center',padding:15}}>
                                      <View style={{flex:1}}>
                                        <GoogleAutoComplete apiKey={"AIzaSyB7_xULf3RHZ_nDT3Ho28_1Nof6IYbW8OQ"} debounce={500} minLength={3}>
                                          {({handleTextChange,locationResults}) => (
                                            <React.Fragment>
                                              {console.log('locationResults',locationResults)}
                                            <View>
                                              <TextInput 
                                                style={{borderWidth:1,borderRadius:15,height:40,width:"95%",paddingHorizontal:13}} 
                                                onChangeText={handleTextChange}
                                                placeholder="busca un lugar" 
                                              />
                                            </View>
                                            <ScrollView contentContainerStyle={{zIndex:2,height:200}}>
                                              {locationResults.map(elemt => (
                                                <LocationItem
                                                  {...elemt}
                                                  key={elemt.id}
                                                />
                                              ))}
                                            </ScrollView>
                                          </React.Fragment> 
                                          )}

                                        </GoogleAutoComplete>
                                      </View>
                                    <Icon containerStyle={{flex:0.3}} name="chevron-right" type="font-awesome" size={35} color="#e4e4e4"/>
                                  </View>
                                </View>
                                <View style={styles.boxes}>
                                    <View style={styles.boxsubTitle}>
                                      <Text style={styles.subTitle}>Destino</Text>
                                    </View>
                                    <View style={{flex:2,}}>

                                    </View>
                                </View>
                                <View style={{flex:1.6,}}>
                                <View style={styles.boxsubTitle}>
                                      <Text style={styles.subTitleInfo}>Informacion del Paquete</Text>
                                    </View>
                                    <View style={{flex:4,}}>

                                    </View>
                                </View>
                            </View>
                        </View>
                        
                </Animated.View>
            </View>
        )
    }
}

