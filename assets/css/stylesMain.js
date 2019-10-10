import { StyleSheet } from "react-native";

export default StyleSheet.create({
    division:{
      flex:6,
      alignItems:"center",
    },
    gradiant:{
      flex:1, 
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 30,
      paddingTop: 40
    },
    containerRegister:{
      flex:1,
      alignItems: "stretch",
      flexDirection: "column",
      
    },
      container: {
          flex:1,
      alignItems: "stretch",
      justifyContent: "center",
      flexDirection: "column",
    },
    background:{
      flex:1, 
      alignItems: "stretch",
      justifyContent: "center"
    },
    containerButtons:{
      flex:2,
      backgroundColor: "rgba(255,255,255,0.1)",
      justifyContent: "center",
      flexDirection: "column",
      // transform: [
      //   {skewY: '-5deg'}
      // ],
    },
    textColor:{
      color:"white",
      paddingBottom:10,
      letterSpacing: 2,
      fontSize:25,
    },
    containerImages:{
      flex:5,
      justifyContent: "flex-end",
      alignItems:"center",
      flexDirection: "column"
    },
    containerLogo:{
      flex:1,
      justifyContent: "center",
      alignItems:"center",
      paddingTop: 35,
    },
    logoImage:{
      width:150,
      height:150,
      
    },
    submitSession:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:17,
      paddingBottom:17,
      backgroundColor:'#02b2bc',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#02b2bc'
    },
    submitRegister:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:17,
      paddingBottom:17,
      backgroundColor:'transparent',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#fff'
    },
  
    submitText:{
      textAlign:'center',
      color:'#fff',
      fontSize: 19,
      letterSpacing: 1.3,
    },
  
  });