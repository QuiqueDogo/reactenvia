import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default class HeaderHome extends Component {
    constructor(props) {
        super(props);
       this.state ={
         title1 : `${this.props.title}`,
         user : `${this.props.user}`,
         date:""
       }
     }
    componentDidMount(){
        var day = new Date().getDate();
        var monthNumber = new Date().getMonth();
        var months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
        var year = new Date().getFullYear();
        this.setState({
          date: day+" "+months[monthNumber]+","+year
        })
      }
    render() {
        const {title1,date,user} = this.state   
        return (
            <LinearGradient colors={["#015279","#039aab"]} start={[0.9,0.6]} end={[0.0,0.2]} style={styles.gradiantHome}>
                <View style={styles.textHome}>
                    <Text style={styles.colorText}>{title1}</Text>
                    <Text style={styles.colorText}>{date}</Text>
                </View>
                <View style={styles.userCont}>
                    <Text style={styles.userText}>{user}</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradiantHome:{
        flex:1,
        padding:30,
    },
    textHome:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'space-between',
        color:"white",
    },
    colorText:{
        color:"white",
        fontWeight:"400",
        fontSize:13,
    },
    userText:{
        fontSize:26,
        color:"white"
    },
    userCont:{
        flex:3
    }
})