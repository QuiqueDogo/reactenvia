import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
  buttonFloating:{
    width: 250,
  },
  buttonLoginFloating:{
    width:250,
  },
  viewFloat:{
    position:"absolute",
    top: Platform.OS == "android" ? 70 : 10,
  },
  buttonStyleRegister:{
    borderWidth: 1,
    borderColor: '#02b2bc',
    borderRadius: 30,
    backgroundColor:'#02b2bc',
    height:60,
  },
  buttonStylesContainerRegister:{
    marginVertical: 10,
    width: 250,
    position:"absolute",
    bottom : Platform.OS == "android" ? -25 : -40
  },
  buttonStylesContainerLogin:{
    marginVertical: 10,
    width: 250,
    position:"absolute",
    bottom : Platform.OS == "android" ? -25 : -40
  },
    formStyles:{
      width:"80%",
      marginTop:10,
    },
    division:{
      flex:6,
      alignItems:"center",
      marginTop: 15,
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
    cardStyle:{
      flex:1,
      width: "90%",
      position:"absolute",
      top:"-8%",
      alignItems: "center",
      flexDirection:"column",
      backgroundColor:"#fff",
      borderRadius:15,
      shadowColor: "#000",
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 20,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      height: (Platform.OS=="android") ? "50%" :"40%" ,
    },
    buttoncontRegister2:{
      borderWidth: 1, 
      borderColor: '#02b2bc', 
      borderRadius: 30, 
      backgroundColor:'#02b2bc', 
      height:60, 
      position:"absolute", 
      top: Platform.OS ==="android" ? 220 :195, 
      width:250 
    },
    cardVerify: {
      flex:1,
      width: "90%",
      position:"absolute",
      top:"-8%",
      alignItems: "center",
      flexDirection:"column",
      backgroundColor:"#fff",
      borderRadius:15,
      shadowColor: "#000",
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 20,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      height: "85%" ,
  },
  scrollStyle:{
    flex:1,
    width:"100%",
    borderRadius:15,
  }
  
  });