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
// import ReactNativeAlgoliaPlaces from 'react-native-algolia-places'
import algoliasearch from 'algoliasearch/reactnative';
import LocationItem from "../components/LocationItem";
import SizeBox from "../components/SizeBox";

var places = algoliasearch.initPlaces("plQRVP38C91U","")

export default class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checkedPackage:false,
          checkedSobre:false,
          search:"",
          data:null,
          selected:null,
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

    CheckBoxes = (info) => {
      if(info== "package"){
        this.setState({checkedPackage:!this.state.checkedPackage, checkedSobre:false})
      }else if(info== "sobre"){
        this.setState({checkedSobre:!this.state.checkedSobre, checkedPackage:false})
      }
    }
    // componentDidUpdate(){
    //   if(this.state.data){
    //     var info = this.state.data.hits
    //     console.log("hola")
    //     setTimeout(() => {
    //       // console.log(this.state.data)   
    //       info.forEach(element => {
    //         console.log(element.postcode)
    //         console.log(element._highlightResult.administrative[0].value)
    //       });
    //     }, 1000);
    //   }
    // }
    
    searchOptions(text){
      var AllData = {hitsPerPage:5,};

      AllData.query = text

      places
          .search(AllData)
          .then(res => {
            this.setState({data: res})
          })
          .catch(err => {
          this.onSearchError(err);
        });

    }

    fall =new Animated.Value(1);  
    render() {
        return (
          <KeyboardAvoidingView contentContainerStyle={styles.containerRegister} style={styles.containerRegister} behavior="position" keyboardVerticalOffset={-200} >
          
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
                              <TextInput value={this.state.search} onChangeText={value => this.setState({search: value})}/>
                              {/* <Button onPress={()=> this.searchOptions(this.state.search)} />
                                {this.state.data &&
                                this.state.data.hits.map((val, i)=>                                  
                                  <TouchableOpacity key={i+"search"} 
                                  onPress={()=>{console.log("city: ",(val.city)? val.city.default[0] +"," :""), 
                                                this.setState({
                                                  selected:{
                                                    name: val.locale_names.default[0],
                                                    postcode: val.postcode[0],
                                                    country_code: val.country_code,
                                                    country: val.
                                                  }
                                                }) }}
                                  >
                                    <View style={{flexDirection:"row"}}>
                                      <Text>{(val.locale_names)? val.locale_names.default[0] :""}</Text>
                                      <Text style={{fontSize:10}}>{
                                      ((val.city)? val.city.default[0] +"," :"") +
                                      ((val.administrative[0] == val.locale_names.default[0] )? "" :val.administrative[0]+",") +
                                      (val.country.default)
                                      }</Text>
                                    </View>
                                  </TouchableOpacity>
                                ) 
                                } */}
                                <View style={styles.boxes}>
                                  <View style={styles.boxsubTitle}>
                                    <Text style={styles.subTitle}>Origen</Text>
                                  </View>
                                  <View style={{flex:2,flexDirection:"row",justifyContent: 'center',padding:15}}>
                                      <View style={{flex:1}}>
                                        <TextInput style={{width:"100%",borderWidth:1,borderRadius:15, height:45,paddingLeft:10, borderColor:"#d4d4d4"}} />
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
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0,}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Paquete" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedPackage} onPress={() => this.CheckBoxes("package")}/>
                                        <CheckBox containerStyle={{backgroundColor:"white" ,borderWidth:0}} textStyle={{fontWeight:"300",color:"#0eb7c0"}} title="Sobre" size={28} iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor="#00b3bc" checked={this.state.checkedSobre} onPress={() => this.CheckBoxes("sobre")}/>
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
                                       onPress={ ()=>{ console.log(this.state)}} 
                                  />
                            </View>
                        </View>
                        
                </Animated.View>
            </View>
          </KeyboardAvoidingView>
        )
    }
}

