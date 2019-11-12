import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../../assets/css/StylesGenerateGuide';
import HeaderHome from "../components/HeaderHome";
import Guides from "../components/Guides";


export default class GenerateGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:[],
      change: false,
    };
    this.sendData = this.sendData.bind(this)
    this.GoBack = this.GoBack.bind(this)
  }
  static navigationOptions ={
    header:null
  };
  componentWillMount(){
    this.rateGuides();
  }

  rateGuides = async () =>{
    let rute = this.props.navigation.state.params
    let rutaRate = "https://api-test.envia.com/ship/rate/";
    let origin = rute.origin;
    let destination = rute.destination;
    let packages = rute.packages;
    let carriers = rute.carriers.data;
    carriers.forEach((element) => {
      let shipment = {"carrier": element.name,"type": 1};
      let params = {
        method: "POST",
        headers : {
          'Authorization': "Bearer bcfdee1b9bdd5762027790ede71c534ce7d963fa4ece3ee5b7cc21d7f9eb0d4c",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          origin,
          destination,
          packages,
          shipment
        })
      };
      
      fetch(rutaRate, params)
      .then(response => response.json().then(data => this.infoRate(data,element.name)).catch(error => console.log(error)))
      .catch(error => console.log(error));
    });

   setTimeout(() => {
     this.setState({change:true})
   }, 2500);

  }

  infoRate = (data) => {
    var inf = this.state.info
    if(data.meta == "rate"){
      this.setState({info: inf.concat(data)})
    }
  }

  GoBack = () => {
    this.props.navigation.goBack()
  }

 sendData = (price,time,company,currency) => {
    this.props.navigation.navigate("DetailInfo",{
        info:{
          price,time,company,currency  
        }
    })
 }

  render() {
      const {change,info} = this.state
    return (
      <View style={styles.containerRegister}>
        <HeaderHome title="Generar Guias" user="" pag="Generate" />
        <View style={styles.Division}>
            <View style={styles.cardGenerate}>
                <ScrollView style={{width:"100%", flex:1,}} showsVerticalScrollIndicator={false}>
                    {change == false &&
                      <ActivityIndicator animating={true} size="large" color="#039aab" />
                    }
                    {change == true &&
                      <Guides data={info} sendData={this.sendData} GoBack={this.GoBack}/>
                    }
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}
