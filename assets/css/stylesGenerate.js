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
      }
})