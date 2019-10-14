import React, { Component } from 'react';
import { Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../../assets/css/stylesMain";

export default class Header extends Component {
    constructor(props) {
     super(props);
    //  console.log(this.props)
    this.state ={
      title1 : `${this.props.title}`,
      title2 : `${this.props.title2}`
    }
   }

   render() {
     // const value = this.props.navigation.state.params.item
     return (
               <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={styles.gradiant}>
                 <Text style={{color:"white", fontSize: 19,  }}>{this.state.title1}</Text>
                 <Text style={{color:"white",  marginTop:10,textAlign:"left"}}>{this.state.title2}</Text>
                 <Text style={{color:"white", }}></Text>
               </LinearGradient> 
         );
     }
 }