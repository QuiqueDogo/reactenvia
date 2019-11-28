import React, { Component } from 'react';
import { Text, View,TouchableOpacity, KeyboardAvoidingView, Platform, Modal } from 'react-native';
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
          valueweigth:0,
          namePackage:["Paquete","Tarima"],
          nameweight:["cm","in"],
          PackageSelected:[{selectWeigth:"KG",selectLength:"CM"},{selectWeigth:"LB",selectLength:"IN"}]
        }
        this.ChangeText = this.ChangeText.bind(this);
        this.ModalPickerVisible = this.ModalPickerVisible.bind(this);
        this.changeValuePackage = this.changeValuePackage.bind(this);
        this.ChangeKeyBoard = this.ChangeKeyBoard.bind(this);
        this.ModalPickerAnd = this.ModalPickerAnd.bind(this);
      };
      componentWillMount(){
        this.getAllData();
      }

      ChangeKeyBoard(value ){
        this.setState({valueKeyborad:value});
      }

      
      getAllData = async() => {
        // https://queries.envia.com/available-carrier/{{country_code}}/{{international}}/{{shipment_type}}
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
        fetch(rutaAvailableCarriers, params).then(response => response.json().then(data => {this.setState({CarriersAvailable:data})}).catch(error => console.log(error))).catch(error => console.log(error));
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
        if(type == "Paquete" || type == "Tarima"){
         this.setState({typePackage:"content"})
        }else if(type == "cm" || type == "in" ){
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

      ModalPickerAnd = (value, state) => {
        console.log(value, state);
        if(state === "content"){
          this.setState({valueContent:value})
          this.setState({ModalPickerVisible:!this.state.ModalPickerVisible});
        }else if(state === "weigth"){
          this.setState({valueweigth:value})
          this.setState({ModalPickerVisible:!this.state.ModalPickerVisible});
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

    someFun = (Origin) => {
      this.props.dispatch({
        type : "ORIGIN",
        state : Origin
      })
    }
      
    fall =new Animated.Value(1);  
    render() {
      const { height, width, length, weight,weightUnit,lengthUnit,infoPostalCode,infoPostalCode2,country_code,query,result,query2,result2, ModalPickerVisible, typePackage,valueContent,valueweigth, PackageSelected } = this.state;
      const Origin = this.props.navigation.getParam("origin");
      const ValidateOrigin = this.props.navigation.state.params;
      const Destination = this.props.navigation.getParam("destination");
        return (
          <KeyboardAvoidingView contentContainerStyle={styles.containerRegister} style={styles.containerRegister} behavior="position" keyboardVerticalOffset={-250} >
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
                                <View style={{flex:2,flexDirection:"row",justifyContent: 'flex-start',paddingTop:8,marginHorizontal:(Platform.OS === "ios") ? 10:0}}>
                                    <View style={{flex:0.9, }}>
                                    {(typeof Origin == "undefined") && 
                                      <Autocomplete 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        defaultValue={query}
                                        data={infoPostalCode}
                                        keyExtractor={(item, index) => item.value}
                                        listContainerStyle={{width:"100%",zIndex:10,backgroundColor:"white"}}
                                        listStyle={{ maxHeight:135, width:"100%",zIndex:10,backgroundColor:"white", borderRadius:10}}
                                        placeholder="Origen (Ciudad o Codigo Postal)"
                                        inputContainerStyle={{borderRadius:10, width:"100%",zIndex:10,marginHorizontal:(Platform.OS === "android") ? 10:10, paddingLeft:10,paddingRight:10,borderColor:"#bdbdbd"}}
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
                                      <View style={{paddingLeft:15}}>
                                        <Text>{(ValidateOrigin.origin.street + " "+ ValidateOrigin.origin.number +", ")+("Col. "+ValidateOrigin.origin.district+".")}</Text>
                                        <Text>{(ValidateOrigin.origin.city + ", ")+("CP. " + ValidateOrigin.origin.postalCode)}</Text>
                                        <Text>{(ValidateOrigin.stateCountry + ", ") + (ValidateOrigin.origin.country)}</Text>
                                      </View>
                                    }
                                    </View>
                                  {(typeof Origin == "undefined") &&
                                  <Icon containerStyle={{marginTop:"2%",marginLeft:"auto", marginRight:10}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => this.props.navigation.navigate("Origin")}/>
                                  }
                                  {(typeof Origin != "undefined") &&
                                  <Icon containerStyle={{marginTop:"2%",marginLeft:"auto", marginRight:10}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4" onPress={() => {this.props.navigation.navigate("Origin",{Origin}), this.someFun(Origin)}}/>
                                  }
                                </View>
                                <Divider style={{backgroundColor:"#e4e4e4", height:1, zIndex:-1}}/>
                              </View>
                              <View style={[(Platform.OS === "android")?styles.boxes:styles.boxesIos,{zIndex:8}]}>
                                  <View style={styles.boxsubTitle}>
                                    <Text style={styles.subTitle}>Origin</Text>
                                  </View>
                                  <View style={{flex:2,flexDirection:"row",justifyContent: 'flex-start',paddingTop:8,marginHorizontal:(Platform.OS === "ios") ? 10:0}}>
                                    <View style={{flex:0.9}}>
                                    {(typeof Destination == "undefined") && 
                                      <Autocomplete 
                                      autoCapitalize="none"
                                      autoCorrect={false}
                                      defaultValue={query2}
                                      data={infoPostalCode2}
                                      keyExtractor={(item, index) => item.value}
                                      listContainerStyle={{width:"100%",zIndex:10,backgroundColor:"white"}}
                                      listStyle={{ maxHeight:135, width:"100%",zIndex:10,backgroundColor:"white", borderRadius:10}}
                                      placeholder="Destino (Ciudad o Codigo Postal)"
                                      inputContainerStyle={{borderRadius:10, width:"100%",zIndex:10,marginHorizontal:(Platform.OS === "android") ? 10:10, paddingLeft:10,paddingRight:10}}
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
                                       <View style={{paddingLeft:15}}>
                                        <Text>{(ValidateOrigin.destination.street + " "+ ValidateOrigin.destination.number +", ")+("Col. "+ValidateOrigin.destination.district+".")}</Text>
                                        <Text>{(ValidateOrigin.destination.city + ", ")+("CP." + ValidateOrigin.destination.postalCode)}</Text>
                                        <Text>{(ValidateOrigin.stateCountry + ", ") + (ValidateOrigin.destination.country)}</Text>
                                      </View>
                                    }
                                    </View>
                                    {(typeof Destination == "undefined") && 
                                    <Icon containerStyle={{marginTop:"2%",marginLeft:"auto", marginRight:10}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4"
                                    onPress={() => this.props.navigation.navigate("Destination")}
                                    />
                                    }
                                    {(typeof Destination != "undefined") && 
                                    <Icon containerStyle={{marginTop:"2%",marginLeft:"auto", marginRight:10}} name="chevron-right" type="font-awesome" size={25} color="#e4e4e4"
                                    onPress={() => this.props.navigation.navigate("Destination",)}
                                    />
                                    }
                                  </View>
                                  <Divider style={{backgroundColor:"#e4e4e4", height:1, zIndex:-1}}/>
                              </View>

                              <View style={{height:"50%",}}>
                                  <View style={[styles.boxsubTitle,{marginTop:0}]}>
                                        <Text style={styles.subTitleInfo}>Informacion del Paquete</Text>
                                  </View>
                                  <View style={{flex:4,}}>
                                    <View style={{flex:0.85, flexDirection:"row", justifyContent:"space-around",marginBottom:10, marginHorizontal:10 }} >
                                      <PickerPackage title="Tipo de Envio" value={this.state.namePackage[valueContent]} ModalPickerVisible={this.ModalPickerVisible} />
                                      <PickerPackage title="Medida" value={this.state.nameweight[valueweigth]} ModalPickerVisible={this.ModalPickerVisible}/>
                                    </View>
                                    <View style={{flex:2.8, flexDirection:"row",justifyContent:"space-around",marginHorizontal:10, marginVertical:10}} >
                                      <SizeBox type={lengthUnit} label="Alto"  value={height} dimensions="height" ChangeText={this.ChangeText}  ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                                      <SizeBox type={lengthUnit} label="Ancho" value={width} dimensions="width" ChangeText={this.ChangeText}  ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                                      <SizeBox type={lengthUnit} label="Largo" value={length} dimensions="length" ChangeText={this.ChangeText}  ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                                      <SizeBox type={weightUnit} label="Peso"  value={weight} dimensions="weight" ChangeText={this.ChangeText}  ChangeKeyBoard={value => this.ChangeKeyBoard(-250)}/>
                                    </View>
                                  </View>
                              </View>
                              <Button  title="Cotizar" buttonStyle={styles.buttonStyleRegister} titleStyle={{ fontSize: 21, paddingRight:30, textAlign:"center"}} containerStyle={styles.buttonVerify} iconRight iconContainerStyle={{ paddingLeft: 20 }} icon={{ name:"dollar", type:"font-awesome", size:19, color:"white",}} 
                                      onPress={ () => { this.props.navigation.navigate("GenerateGuide",{
                                       origin:Origin,
                                       destination:Destination,
                                       packages:[{
                                           "amount": 1,
                                           "content": "Prueba",
                                           "declaredValue": 0,
                                           "dimensions":  {
                                             "height": parseInt(height),
                                             "length": parseInt(length),
                                             "width": parseInt(width)
                                           },
                                           "insurance": 0,
                                           "lengthUnit": PackageSelected[valueweigth].selectLength,
                                           "type": "box",
                                           "weight": parseInt(weight),
                                           "weightUnit": PackageSelected[valueweigth].selectWeigth
                                         }],
                                       carriers:this.state.CarriersAvailable
                                      })}} 
                                 /> 
                            </View>
                        </View>
                        
                </Animated.View>
            </View>
            
            <Modal animationType="fade" animated={true} transparent={true} visible={ModalPickerVisible} >
              <ModalPicker type={typePackage}  ModalPickerVisible={this.ModalPickerVisible} valueContent={valueContent} valueweigth={valueweigth} changeValuePackage={this.changeValuePackage} ModalPickerAnd={this.ModalPickerAnd}/>
            </Modal>
          </KeyboardAvoidingView>
        )
    }
}

