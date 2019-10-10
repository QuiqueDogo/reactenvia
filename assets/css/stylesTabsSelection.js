import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        justifyContent: "center",
        flexDirection: "column",
      },
      gradiant:{
        flex:1, 
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 30,
      },
      background:{
        flex:5, 
        backgroundColor:"#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      insideSession:{
        flex:1,
        width: "80%",
        marginLeft: 16,
        marginRight: "auto",
      },
      touchable1:{
        flex:2 ,
        justifyContent:'center',
        alignItems:"center",
      },
      touchable2:{
        flex:3 ,
        justifyContent:'center',
      },
      submitRegister:{
          height: 50,
          width: "90%",
          backgroundColor:'transparent',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#a3bfcd',
          paddingLeft: 15
        },
      buttonlogin:{
          flex:1, 
          flexDirection: "row",
          alignItems:"center",
          alignContent: 'center',
          justifyContent: 'center',
          position:"absolute",
          width:"80%",
          height:Platform.OS == "ios" ?"40%": "50%",
          top: Platform.OS == "android" ? 150 : 200,
          backgroundColor:'#02b2bc',
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#02b2bc'
      },
      buttonsubmit:{
        flex:1, 
        flexDirection: "row",
        alignItems:"center",
        alignContent: 'center',
        justifyContent: 'center',
        position:"absolute",
        width:"80%",
        height:Platform.OS == "ios" ?"15%": "19%",
        bottom: Platform.OS == "android" ? -88 : -110,
        backgroundColor:'#02b2bc',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#02b2bc'
    },
      text:{
          color:"white",
          textAlign:"center",
          letterSpacing:1.3, 
          fontSize:19,
      },
      barSelected :{
        alignItems:"center",
        position: "absolute",
        width: "34%",
        height: "6%",
        top: 35,
        left:10,
        backgroundColor: "#00B3C1",
      }
  
  });