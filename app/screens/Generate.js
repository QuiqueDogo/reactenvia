import React, { Component } from 'react';
import { Text, View,TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, FlatList, Platform, Modal } from 'react-native';
import { Icon,CheckBox,Button, Divider } from 'react-native-elements';
import MenuEnvia from "../components/menuEnvia";
import HeaderHome from "../components/HeaderHome";
import PickerPackage from "../components/PickerPackage";
import BoxMoney from '../components/boxMoney';
import ModalPicker from '../components/ModalPicker';
import styles from "../../assets/css/stylesGenerate";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import SizeBox from "../components/SizeBox";
import Autocomplete from 'react-native-autocomplete-input';


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
          lengthUnit:"cm",
          textOrigin:"",
          infoPostalCode: [],
          infoPostalCode2: [],
          query: '',
          query2: '',
          result:false,
          result2:false,
          ModalPickerVisible:false,
          typePackage:"content",
          valueContent:0,
          valueweigth:0
        }
        this.ChangeText = this.ChangeText.bind(this);
        this.ChangeVolum = this.ChangeVolum.bind(this);
        this.ModalPickerVisible = this.ModalPickerVisible.bind(this);
        this.changeValuePackage = this.changeValuePackage.bind(this);
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
      
      OriginText = async (newText, country) => {
        this.setState({query:newText})
        if(newText.length >= 3){
          this.setState({result:false})
          let ruta  = `https://enviaya.com.mx/shipping/address_short_search.json?q=${newText}&country=${country}`;
          let params = {
            method: "GET",
            headers : {
              "Referer":"https://enviaya.com.mx",
              'Content-Type': 'application/json',
              "Origin":"https://enviaya.com.mx",
            },
            mode: 'cors'
          }
          fetch(ruta,params).then(response => response.json().then(data => this.setState({infoPostalCode:data})).catch(error => console.log(error))).catch(error => console.log(error));
        }
      }
      
      ModalPickerVisible = (type) => {
        this.setState({ModalPickerVisible:!this.state.ModalPickerVisible})
        if(type == "Paquete"){
         this.setState({typePackage:"content"})
        }else if(type == "cm"){
          this.setState({typePackage:"weigth"})
        }
      }

      changeValuePackage = (value, state) => {
        if(state === "content"){
          console.log("entra en paquete", value);
          this.setState({valueContent:value})
        }else if(state === "weigth"){
          console.log("entra en peso", value);
          this.setState({valueweigth:value})
        }
      }

      OriginText2 = async (newText, country) => {
      this.setState({query2:newText})
      if(newText.length >= 3){
        this.setState({result2:false})
        let ruta  = `https://enviaya.com.mx/shipping/address_short_search.json?q=${newText}&country=${country}`;
        let params = {
          method: "GET",
          headers : {
            "Referer":"https://enviaya.com.mx",
            'Content-Type': 'application/json',
            "Origin":"https://enviaya.com.mx",
          },
          mode: 'cors'
        }
        fetch(ruta,params).then(response => response.json().then(data => this.setState({infoPostalCode2:data})).catch(error => console.log(error))).catch(error => console.log(error));
      }
    }
      
    fall =new Animated.Value(1);  
    render() {
      const {type, height, width, length, weight,weightUnit,lengthUnit,infoPostalCode,infoPostalCode2,country_code,query,result,query2,result2, ModalPickerVisible, typePackage,valueContent,valueweigth } = this.state;
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
                              <View style={(Platform.OS === "android")?styles.boxes:styles.boxesIos}>
                                <View style={styles.boxsubTitle}>
                                  <Text style={styles.subTitle}>Origen</Text>
                                </View>
                                <View style={{flex:3,flexDirection:"row",justifyContent: 'center',paddingTop:8,marginHorizontal:(Platform.OS === "ios") ? 10:0}}>
                                    <View style={{flex:1, }}>
                                    {(typeof Origin == "undefined") && 
                                      <Autocomplete 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        defaultValue={query}
                                        data={infoPostalCode}
                                        keyExtractor={(item, index) => item.value}
                                        listContainerStyle={{width:"100%",zIndex:10,backgroundColor:"white"}}
                                        listStyle={{ maxHeight:135, width:"100%",zIndex:10,backgroundColor:"white", borderRadius:10}}
                                        inputContainerStyle={{borderRadius:10, width:"100%",zIndex:10,marginHorizontal:(Platform.OS === "android") ? 10:0, paddingLeft:10,paddingRight:10}}
                                        onChangeText={text => this.OriginText(text,"mx")}
                                        hideResults={result}
                                        renderItem={(info) => (
                                          <View style={{padding:10, borderBottomWidth:0.8, borderColor:"#e4e4e4"}}>
                                          <TouchableOpacity 
                                          onPress={() => {this.setState({query:info.item.value, result:true}), this.props.navigation.navigate("Origin",{info, code_country:country_code})}}
                                          >
                                            <Text style={styles.itemText}>
                                             {info.item.value}
                                            </Text>
                                          </TouchableOpacity>
                                          </View>
                                        )}
                                      />
                                    }
                                    {(typeof Origin != "undefined") &&
                                      <View>
                                        <Text>{(ValidateOrigin.origin.street + " "+ ValidateOrigin.origin.number +", ")+("Col. "+ValidateOrigin.origin.district+".")}</Text>
                                        <Text>{(ValidateOrigin.origin.city + ", ")+("CP. " + ValidateOrigin.origin.postalCode)}</Text>
                                        <Text>{(ValidateOrigin.stateCountry + ", ") + (ValidateOrigin.origin.country)}</Text>
                                      </View>
                                    }
                                    </View>
                                  <Icon containerStyle={{flex:0.3,marginTop:"2%"}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("Origin")}/>
                                </View>
                                <Divider style={{backgroundColor:"#e4e4e4", height:1, zIndex:-1}}/>
                              </View>

                              <View style={[(Platform.OS === "android")?styles.boxes:styles.boxesIos,{zIndex:8}]}>
                                  <View style={styles.boxsubTitle}>
                                    <Text style={styles.subTitle}>Destino</Text>
                                  </View>
                                  <View style={{flex:2,flexDirection:"row",justifyContent: 'center',paddingTop:8,marginHorizontal:(Platform.OS === "ios") ? 10:0}}>
                                    <View style={{flex:1}}>
                                    {(typeof Destination == "undefined") && 
                                      <Autocomplete 
                                      autoCapitalize="none"
                                      autoCorrect={false}
                                      defaultValue={query2}
                                      data={infoPostalCode2}
                                      keyExtractor={(item, index) => item.value}
                                      listContainerStyle={{width:"100%",zIndex:10,backgroundColor:"white"}}
                                      listStyle={{ maxHeight:135, width:"100%",zIndex:10,backgroundColor:"white", borderRadius:10}}
                                      inputContainerStyle={{borderRadius:10, width:"100%",zIndex:10,marginHorizontal:(Platform.OS === "android") ? 10:0, paddingLeft:10,paddingRight:10}}
                                      onChangeText={text => this.OriginText2(text,"mx")}
                                      hideResults={result2}
                                      renderItem={(info) => (
                                        <View style={{padding:10, borderBottomWidth:0.8, borderColor:"#e4e4e4"}}>
                                        <TouchableOpacity 
                                        onPress={() => {this.setState({query2:info.item.value, result2:true}), this.props.navigation.navigate("Destination",{info, code_country:country_code})}}
                                        >
                                          <Text style={styles.itemText}>
                                           {info.item.value}
                                          </Text>
                                        </TouchableOpacity>
                                        </View>
                                      )}
                                    />
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
                                  <Divider style={{backgroundColor:"#e4e4e4", height:1, zIndex:-1}}/>
                              </View>

                              <View style={{height:"50%",}}>
                                  <View style={[styles.boxsubTitle,{marginTop:0}]}>
                                        <Text style={styles.subTitleInfo}>Informacion del Paquete</Text>
                                  </View>
                                  <View style={{flex:4,}}>
                                    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",marginVertical:10, marginHorizontal:15 }} >
                                      <Pic444444kerPackage title="Tipo de Envio" value="Paquete" ModalPickerVisible={this.ModalPickerVisible} />
                                      <PickerPackage title="Medida" value="cm" ModalPickerVisible={this.ModalPickerVisible}/>
                                      {/* 
                                      <Icon containerStyle={{marginTop:"5%",marginRight:40}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("InfoPackage",{type, height, width, length, weight})}/>
                                       */}
                                    </View>
                                    <View style={{flex:2.6, flexDirection:"row",justifyContent:"space-between",}} >
                                      <SizeBox type={lengthUnit} holder="Alto"  value={height} dimensions="height" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                      <SizeBox type={lengthUnit} holder="Ancho" value={width} dimensions="width" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                      <SizeBox type={lengthUnit} holder="Largo" value={length} dimensions="length" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                      <SizeBox type={weightUnit} holder="Peso"  value={weight} dimensions="weight" ChangeText={this.ChangeText} ChangeVolum={this.ChangeVolum}/>
                                    </View>
                              
                                  </View>
                              {/* <Button title="state" onPress={() => console.log(this.props)}/> */}
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
                        </View>
                        
                </Animated.View>
            </View>
            <Modal animationType="fade" animated={true} transparent={true} visible={ModalPickerVisible} >
              <ModalPicker type={typePackage}  ModalPickerVisible={this.ModalPickerVisible} valueContent={valueContent} valueweigth={valueweigth} changeValuePackage={this.changeValuePackage} />
            </Modal>
          </KeyboardAvoidingView>
        )
    }
}

