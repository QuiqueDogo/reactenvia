import React, { Component } from 'react';
import { Text, View,TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Icon,CheckBox,Button } from 'react-native-elements';
import MenuEnvia from "../components/menuEnvia";
import HeaderHome from "../components/HeaderHome";
import BoxMoney from '../components/boxMoney';
import styles from "../../assets/css/stylesGenerate";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from "../components/LocationItem";
import SizeBox from "../components/SizeBox";


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
          DataState: data,
          checkedPackage:false,
          checkedSobre:false
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
          <KeyboardAvoidingView contentContainerStyle={styles.containerRegister} style={styles.containerRegister} behavior="position" keyboardVerticalOffset={-100} >
          
            <View style={styles.containerRegister}>
                <BottomSheet 
                    snapPoints = {[300, 100]}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledInnerScrolling={false}
                    onOpenStart={()=>console.log("hola")}
                    />
                <Animated.View style={[styles.containerRegister,{opacity: Animated.add(0.1, Animated.multiply(this.fall))}]} >
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
                                        <TextInput style={{width:"100%",borderWidth:1,borderRadius:15, height:45,paddingLeft:10, borderColor:"#d4d4d4"}} />
                                        <GoogleAutoComplete apiKey={"AIzaSyB7_xULf3RHZ_nDT3Ho28_1Nof6IYbW8OQ"} debounce={500} minLength={3}>
                                          {/* {({handleTextChange,locationResults}) => (
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
                                          )} */}

                                        </GoogleAutoComplete>
                                      </View>
                                    <Icon containerStyle={{flex:0.3,marginTop:"2%"}} name="chevron-right" type="font-awesome" size={35} color="#e4e4e4" onPress={() => this.props.navigation.navigate("Destination")}/>
                                  </View>
                                </View>

                                <View style={styles.boxes}>
                                    <View style={styles.boxsubTitle}>
                                      <Text style={styles.subTitle}>Destino</Text>
                                    </View>
                                    <View style={{flex:2,flexDirection:"row",justifyContent: 'center',padding:15}}>
                                      <View style={{flex:1}}>
                                        <TextInput style={{width:"100%",borderWidth:1,borderRadius:15, height:45,paddingLeft:10, borderColor:"#d4d4d4"}} />
                                      </View> 
                                      <Icon containerStyle={{flex:0.3,marginTop:"2%"}} name="chevron-right" type="font-awesome" size={35} color="#e4e4e4"/>
                                    </View>
                                </View>

                                <View style={{flex:2,}}>
                                <View style={styles.boxsubTitle}>
                                      <Text style={styles.subTitleInfo}>Informacion del Paquete</Text>
                                    </View>
                                    <View style={{flex:4,}}>
                                      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start"}} >
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0,}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Paquete" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedPackage} onPress={() => this.setState({checkedPackage:!this.state.checkedPackage})}/>
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Sobre" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedSobre} onPress={() => this.setState({checkedSobre:!this.state.checkedSobre})}/>
                                      </View>
                                      <View style={{flex:2.5, flexDirection:"row",justifyContent:"space-around"}} >
                                        <SizeBox type="cm" holder="Alto"/>
                                        <SizeBox type="cm" holder="Ancho"/>
                                        <SizeBox type="cm" holder="Largo"/>
                                        <SizeBox type="kg" holder="Peso"/>
                                      </View>

                                    </View>
                                </View>
                               <Button  title="Cotizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"dollar", type:"font-awesome", size:19, color:"white",}} 
                                       onPress={ ()=> console.log(this.state)} 
                                  />
                            </View>
                        </View>
                        
                </Animated.View>
            </View>
          </KeyboardAvoidingView>
        )
    }
}

