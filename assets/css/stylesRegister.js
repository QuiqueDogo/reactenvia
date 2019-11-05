import { StyleSheet, Platform } from "react-native";


export default StyleSheet.create({
    containerRegister:{
        flex:1,
    },
    section2:{
        flex:12,
        alignItems:"center",
    },
    phoneInput:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderRadius:15,
        width:"100%",
        height:50,
        borderColor:"#dbdbdb",
        marginTop:18,
        fontSize:15,
        fontWeight:"200",
      },
    codePhone:{
        flexDirection:"row",
        alignItems:"center",
        width:"40%",
        height:48,
        backgroundColor: "#e5e5e5",
        paddingLeft: 14,
        borderBottomStartRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:0,
        borderBottomEndRadius:0,
    },
    inputStyles:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:1,
        borderRadius:15,
        width:"100%",
        height:50,
        paddingLeft: 14,
        borderColor:"#dbdbdb",
        marginTop:18,
        fontSize:15,
        fontWeight:"200",
        
    },
    textCountry:{
        color:"#38b3b9",
        fontSize:15,
        fontWeight:"200"
    },
    flagStyle:{
        width:35,
        height:25, 
        marginRight:10
    },
    codeStyle:{
        color:"#38b3b9",
        fontSize:15, 
        fontWeight:"200"
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
        height: (Platform.OS=="android") ? "95%" :"84%",
        padding:20,
    },
    buttonStyleRegister:{
        borderWidth: 1,
        borderColor: '#02b2bc',
        borderRadius: 30,
        backgroundColor:'#02b2bc',
        height:60,
        width:250,
      },
    buttonFloating:{
        position:"absolute",
        right:"16%",
        bottom:"-5%"
    },
    textTerms:{
        width:"100%",
        textAlign:"center",
        fontSize:13,
        marginTop:18
    },
    styleNumber:{
        marginBottom:"auto",
        marginTop:"auto",
        paddingLeft:17,
        color:"black",
        fontSize:15, 
        fontWeight:"200",
    },
    cardStyleCont:{
        flex:1,
        width: "97%",
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
        height: (Platform.OS=="android") ? "58%" :"49%"
    },
    timer:{
        color:"#02b2bc",
        fontSize:14,
        marginBottom:12,
        textAlign:"right",
        marginRight:15
    },
    numberFormat:{
        color:"#02b2bc",
        letterSpacing: 1.2,
        fontSize:23,
        marginBottom:12
    },
    touchableCode:{
        marginTop:30, 
        marginRight:20, 
        marginLeft:"auto"
    },
    inputText:{
        flex:1,
        borderWidth:1,
        borderRadius:8,
        borderColor:"#d7d7d7",
        height:60,
        marginBottom:"auto",
        marginTop:"auto",
        marginLeft:5,
        marginRight:5,
        fontSize:20,
        paddingLeft:25,
        color:"#02b2bc"
    },
    buttoncontRegister2:{
        position:"absolute",
        right:(Platform.OS=="android")? "14%" :"19%",
        bottom:"-9%"
    },
    cardStyleGood:{
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
        height: (Platform.OS=="android") ? "95%" :"70%",
        padding:20,
    },
})