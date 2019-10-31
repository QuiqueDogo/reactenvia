import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        flexDirection: "column",
        backgroundColor:"#f3f4f7"
        
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
        flex:0.80,
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
        width:"90%",
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
        justifyContent:"flex-end",
        paddingLeft:20
      },
      boxes:{
        flex:1,
        borderBottomWidth:1,
        borderColor:"#e4e4e4"
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
      }
})