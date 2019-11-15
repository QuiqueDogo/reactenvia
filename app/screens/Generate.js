import React, { Component } from 'react';
import { Text, View,TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Icon,CheckBox,Button } from 'react-native-elements';
import MenuEnvia from "../components/menuEnvia";
import HeaderHome from "../components/HeaderHome";
import BoxMoney from '../components/boxMoney';
import styles from "../../assets/css/stylesGenerate";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
// import { GoogleAutoComplete } from 'react-native-google-autocomplete';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationItem from "../components/LocationItem";
import SizeBox from "../components/SizeBox";

export default class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          country_code:"mx",
          checkedPackage:false,
          checkedSobre:false,
          data:null,
          selected:null,
          change:0,
          type:"",
          height:"",
          width:"",
          length:"",
          weight:"",
          weightUnit:"kg",
          lengthUnit:"cm"
        }
        this.ChangeText = this.ChangeText.bind(this)
        this.ChangeVolum = this.ChangeVolum.bind(this)
      };
      componentWillMount(){
        this.getAllData();
      }

      getAllData = async() => {
        let country_code = this.state.country_code
        let rutaAvailableCarriers = "https://queries.envia.com/available-carrier/"+country_code.toUpperCase()+"/0";
        let params = {
          method: "GET",
          headers : {
            'Authorization': "Bearer cb422161bbcba1887477d5376101c27b6899982c7531a1b28fbce75f13d1ebd3",
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }
        fetch(rutaAvailableCarriers, params).then(response => response.json().then(data => this.setState({CarriersAvailable:data})).catch(error => console.log(error))).catch(error => console.log(error))
        

      } 


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

    ChangeText(state, text){
      this.setState({
        [state]: text
      });
    }

    ChangeVolum(type){
      const {height, width, length, weight} = this.state
      if(type == "cm" || type == "kg"){
        var changeHeight = this.ChangeUnitsValue(height,"in");
        var changeWidth = this.ChangeUnitsValue(width,"in");
        var changeLength = this.ChangeUnitsValue(length,"in");
        var changeWeight = this.ChangeUnitsValue(weight,"lb");
        this.setState({lengthUnit:"in",weightUnit:"lb", height: changeHeight ,width: changeWidth ,length: changeLength ,weight: changeWeight, });
      }else if(type == "in" || type == "lb"){
        var changeHeight = this.ChangeUnitsValue(height,"cm");
        var changeWidth = this.ChangeUnitsValue(width,"cm");
        var changeLength = this.ChangeUnitsValue(length,"cm");
        var changeWeight = this.ChangeUnitsValue(weight,"kg");
        this.setState({lengthUnit:"cm",weightUnit:"kg", height: changeHeight ,width: changeWidth ,length: changeLength ,weight: changeWeight, });
      }
      // console.log(`tipo ${type}, ${height}, ${width}, ${length}, ${weight}`)
    }

    ChangeUnitsValue = (val, type) => {
      var change 
      if(type == "in"){
        change = val / 2.54
        change = parseFloat(change).toFixed(2)     
      }else if(type == "cm"){
        change = val * 2.54
        change = parseFloat(change).toFixed(2)     
      }else if(type == "lb"){
        change = val * 2.205
        change = parseFloat(change).toFixed(2)     
      }else if(type == "kg"){
        change = val / 2.205
        change = parseFloat(change).toFixed(2)     
      }
      return change;
    }

    CheckBoxes = (info) => {
      if(info== "package"){
        this.setState({checkedPackage:!this.state.checkedPackage, checkedSobre:false, type:"box"})
      }else if(info== "sobre"){
        this.setState({checkedSobre:!this.state.checkedSobre, checkedPackage:false, type:"pallet"})
      }
    }
  
    fall =new Animated.Value(1);  
    render() {
      const {type, height, width, length, weight,weightUnit,lengthUnit } = this.state;
      const Origin = this.props.navigation.getParam("origin");
      const ValidateOrigin = this.props.navigation.state.params;
      const Destination = this.props.navigation.getParam("destination");
      const Packages = this.props.navigation.getParam("packages");
        return (
          <KeyboardAvoidingView contentContainerStyle={styles.containerRegister} style={styles.containerRegister} behavior="position" keyboardVerticalOffset={-200} >
                <BottomSheet 
                    snapPoints = {[300, 100]}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledInnerScrolling={false}
                    onOpenStart={()=>console.log("hola")}
                    />

            <View style={styles.containerRegister}>
                <Animated.View style={[styles.containerRegister,{opacity: Animated.add(0.1, Animated.multiply(this.fall,0.9))}]} >
                    <HeaderHome title="Generar Guias" user="" pag="Generate" />
                        <View style={styles.divisionHome}>
                        <BoxMoney balance="3,000 MXN"/>
                            <View style={styles.infoGenerate} >
                            {/* <GoogleAutoComplete apiKey={"AIzaSyB7_xULf3RHZ_nDT3Ho28_1Nof6IYbW8OQ"} debounce={500} minLength={3}>
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

                                        </GoogleAutoComplete> */}
                                <View style={styles.boxes}>
                                  <View style={styles.boxsubTitle}>
                                    <Text style={styles.subTitle}>Origen</Text>
                                  </View>
                                  <View style={{flex:2,flexDirection:"row",justifyContent: 'center',padding:15}}>
                                      <View style={{flex:1}}>
                                      {(typeof Origin == "undefined") && 
                                        
                                        <TextInput style={{width:"100%",borderWidth:1,borderRadius:15, height:45,paddingLeft:10, borderColor:"#d4d4d4"}} onPress={() => this.props.navigation.navigate("Origin")}/>
                                      }
                                      {(typeof Origin != "undefined") &&
                                        <View>
                                          <Text>{(ValidateOrigin.origin.street + " "+ ValidateOrigin.origin.number +", ")+("Col. "+ValidateOrigin.origin.district+".")}</Text>
                                          <Text>{(ValidateOrigin.origin.city + ", ")+("CP." + ValidateOrigin.origin.postalCode)}</Text>
                                          <Text>{(ValidateOrigin.stateCountry + ", ") + (ValidateOrigin.origin.country)}</Text>
                                        </View>
                                      }
                                      </View>
                                    <Icon containerStyle={{flex:0.3,marginTop:"2%"}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("Origin")}/>
                                  </View>
                                </View>

                                <View style={styles.boxes}>
                                    <View style={styles.boxsubTitle}>
                                      <Text style={styles.subTitle}>Destino</Text>
                                    </View>
                                    <View style={{flex:2,flexDirection:"row",justifyContent: 'center',padding:15}}>
                                      <View style={{flex:1}}>
                                      {(typeof Destination == "undefined") && 
                                        <TextInput style={{width:"100%",borderWidth:1,borderRadius:15, height:45,paddingLeft:10, borderColor:"#d4d4d4"}} />
                                      }
                                      {(typeof Destination != "undefined") && 
                                         <View>
                                          <Text>{(ValidateOrigin.destination.street + " "+ ValidateOrigin.destination.number +", ")+("Col. "+ValidateOrigin.destination.district+".")}</Text>
                                          <Text>{(ValidateOrigin.destination.city + ", ")+("CP." + ValidateOrigin.destination.postalCode)}</Text>
                                          <Text>{(ValidateOrigin.stateCountry + ", ") + (ValidateOrigin.destination.country)}</Text>
                                        </View>
                                      }
                                      </View> 
                                      <Icon containerStyle={{flex:0.3,marginTop:"2%"}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("Destination")}/>
                                    </View>
                                </View>

                                <View style={{flex:2,}}>
                                    <View style={[styles.boxsubTitle,{marginTop:0}]}>
                                          <Text style={styles.subTitleInfo}>Informacion del Paquete</Text>
                                    </View>
                                    <View style={{flex:4,}}>
                                      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start"}} >
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0,}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Paquete" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedPackage} onPress={() => this.CheckBoxes("package")}/>
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Sobre" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedSobre} onPress={() => this.CheckBoxes("sobre")}/>
                                        <Icon containerStyle={{marginTop:"5%",marginRight:40}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("InfoPackage",{type, height, width, length, weight})}/>
                                      </View>
                                      <View style={{flex:2.5, flexDirection:"row",justifyContent:"space-around",}} >
                                        <SizeBox type={lengthUnit} holder="Alto"  value={height} dimensions="height" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                        <SizeBox type={lengthUnit} holder="Ancho" value={width} dimensions="width" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                        <SizeBox type={lengthUnit} holder="Largo" value={length} dimensions="length" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                        <SizeBox type={weightUnit} holder="Peso"  value={weight} dimensions="weight" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                      </View>

                                    </View>
                                </View>
                               <Button  title="Cotizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"dollar", type:"font-awesome", size:19, color:"white",}} 
                                       onPress={ () => { this.props.navigation.navigate("GenerateGuide",{
                                        // origin:Origin,
                                        // destination:Destination,
                                        // packages:Packages,
                                        origin:{
                                          "city": "Morelia",
                                          "company": "1212",
                                          "country": "MX",
                                          "district": "Issac Arriaga",
                                          "email": "lol@lol.com",
                                          "name": "Luis Enrique",
                                          "number": "21",
                                          "phone": "12",
                                          "postalCode": "58210",
                                          "reference": "12212",
                                          "state": "MI",
                                          "street": "2121"
                                        },
                                        destination:{
                                          "city": "Monterrey",
                                          "company": "Weqwe",
                                          "country": "MX",
                                          "district": "Chepevera",
                                          "email": "Qweqwe@lel.com",
                                          "name": "Luis Enrique",
                                          "number": "We",
                                          "phone": "Qwe",
                                          "postalCode": "64030",
                                          "reference": "Qwe",
                                          "state": "NL",
                                          "street": "We"
                                        },
                                        packages:[{
                                          "amount": 1,
                                          "content": "Qweqw",
                                          "declaredValue": 0,
                                          "dimensions":  {
                                            "height": 10,
                                            "length": 10,
                                            "width": 10
                                          },
                                          "insurance": 10,
                                          "lengthUnit": "CM",
                                          "type": "box",
                                          "weight": 10,
                                          "weightUnit": "KG"
                                        }],
                                        carriers:this.state.CarriersAvailable
                                       })}} 
                                  />
                            </View>
                        <View style={{position:"absolute", bottom:0 }}>
                          <Text>hola</Text>
                        </View>
                        </View>
                        
                </Animated.View>
            </View>
          </KeyboardAvoidingView>
        )
    }
}

