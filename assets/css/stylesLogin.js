import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        flexDirection: "column",
        
      },
    division:{
        flex:9,
        alignItems:"center",
        marginTop: 15,
      },
    cardLogin:{
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
        height: (Platform.OS == "android") ? "48%" :"40%"  ,
    },
    formStyles:{
        width:"80%",
        marginTop:10,
    },
    buttonStyleRegister:{
        borderWidth: 1,
        borderColor: '#02b2bc',
        borderRadius: 30,
        backgroundColor:'#02b2bc',
        height:60,
        width:250
    },
    buttonStylesContainerLogin:{
        position: "absolute",
        bottom:"-7%"
    }
})