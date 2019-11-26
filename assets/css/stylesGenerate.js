import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        flexDirection: "column",
        backgroundColor:"#f3f4f7",
      },
      header: {
        backgroundColor: '#fff',
        height:300,
        paddingTop: 20,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
      panelHeader: {
        alignItems: 'center',
      },
      divisionHome:{
        flex:13,
        alignItems:"center",
        marginTop: 15  
      },
      infoGenerate:{
        flex:0.77,
        marginTop:30,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        width:"95%",
        backgroundColor:"white"
      },
      subTitle:{
        fontSize:22,
        letterSpacing:1.1,
        textTransform:"uppercase",
        color:"#004b74",
      },
      boxsubTitle:{
        flex:1,
        justifyContent:"center",
        paddingLeft:20,
        marginTop:14
      },
      boxes:{
        height:"25%",
      },
      boxesIos:{
        height:"25%",
        zIndex:10000
      },
      subTitleInfo:{
        fontSize:19,
        letterSpacing:1,
        textTransform:"uppercase",
        color:"#004b74",
      },
      autoContainer:{
        flex:2,
      },
      autoinputContainer:{
        borderRadius:20,
        width:"98%",
      },
      overlay:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.2)",
        zIndex:-10,
      },
      buttonStyleRegister:{
        borderWidth: 1,
        borderColor: '#02b2bc',
        borderRadius: 30,
        backgroundColor:'#02b2bc',
        height:60,
        width:250,
    },
    buttonVerify:{
      zIndex:0,
      position:"absolute",
      bottom:"-4%",
      left: Platform.OS==="ios" ? "15%": "13%"
    },
    autocompleteContainer:{
      zIndex:1
    }

})