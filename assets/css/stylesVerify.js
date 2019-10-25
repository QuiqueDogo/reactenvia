import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
    },
    section2:{
        flex:13,
        alignItems:"center",
    },
    cardVerify:{
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
        height: (Platform.OS=="android") ? "95%" :"92%",
        padding:20,
    },
    scrollStyle:{
        width:"100%"
    },
    textStyle:{
        marginLeft:15,
        marginTop:15,
        color:"#939393"
    },
    CPandNumber:{
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    textTerms:{
        marginTop:13,
        marginBottom:30
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
        position:"absolute",
        bottom:"-4%"
    }
})