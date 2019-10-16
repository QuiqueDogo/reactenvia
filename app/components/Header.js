import React, { Component } from 'react';
import { Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../../assets/css/stylesMain";


export default class Header extends Component {
    constructor(props) {
     super(props);
    this.state ={
      title1 : `${this.props.title}`,
      title2 : `${this.props.title2}`,
      origin : `${this.props.page}`
    }
  }
  componentDidMount(){
    var date =Date.now()
  }

  render() {
    const {title1,title2,origin} = this.state
     if (origin == "Home") {
        return(
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={styles.gradiantHome}>
              <Text style={{color:"white", }}>{this.state.title1}</Text>
              <Text style={{color:"white",  marginTop:0,textAlign:"left",fontSize: 23, fontWeight:"400",letterSpacing:1.2}}>{this.state.title2}</Text>

          </LinearGradient> 
        )
     } else {
       return (
          <LinearGradient colors={['#8D4EA2' ,'#3E9AB8']} start={[0.5,0.0]} end={[0.1,0.9]} style={styles.gradiant}>
              <Text style={{color:"white", fontSize: 19,  }}>{this.state.title1}</Text>
              <Text style={{color:"white",  marginTop:10,textAlign:"left"}}>{this.state.title2}</Text>
          </LinearGradient> 
           );   
     }
    }
  }