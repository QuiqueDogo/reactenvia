import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../assets/css/StylesGenerateGuide';
import HeaderHome from "../components/HeaderHome";
import Guides from "../components/Guides";
import { Button } from 'react-native-elements';
import { ActivityIndicator, Colors } from 'react-native-paper';


export default class GenerateGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:[],
      change: false,
    };
    this.sendData = this.sendData.bind(this)
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

    carriers.forEach((element,index) => {
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
      console.log("termine")
    }, 1400);
    
  }

  infoRate = (data,carrier, index, lengthCarriers = 0) => {
    if(data.meta == "rate"){
      console.log(`${data.data[0].carrier}, opciones: ${data.data.length}`)
    }
    // var join = this.state.info.concat(data.data);
    // this.setState({info: join})
    // if(index == lengthCarriers) {
    //   this.setState({change:true})
    // }
  }
  viewstate = () =>{
    console.log(this.state)
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
      const rows =[]; 
      const AllinOne = [
          {id:1,price:60.51,time:"24 a 36 hrs",company:"fedex", currency:"MXN"},
          {id:2,price:123.40,time:"Dia Siguiente",company:"estafeta", currency:"USD"},
          {id:3,price:23.00,time:"2 a 4 dias",company:"estafeta", currency:"MXN"},
          {id:4,price:123.00,time:"1 a 5 dias",company:"fedex", currency:"USD"},
          {id:5,price:53.00,time:"1 a 5 dias",company:"fedex", currency:"MXN"},
        ];
    AllinOne.forEach(element => {
        rows.push(<Guides key={element.id} price={element.price} time={element.time} company={element.company} currency={element.currency} sendData={this.sendData} />)
    });
    
        
    return (
      <View style={styles.containerRegister}>
        <HeaderHome title="Generar Guias" user="" pag="Generate" />
        <View style={styles.Division}>
            <View style={styles.cardGenerate}>
                <ScrollView style={{width:"100%"}} showsVerticalScrollIndicator={false}>
                    {change == false &&
                    //   <ActivityIndicator style={{position:"absolute", left:"40%"}} animating={true} size="large" color={Colors.lightGreen400} />
                    // }
                    // {change == true &&
                      info
                    }
                </ScrollView>
                <Button title=" ver state" onPress={()=> this.viewstate()} />
            </View>
        </View>
      </View>
    );
  }
}
