import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        flexDirection: "column",
        backgroundColor:"#f3f4f7"
    },
    gradiantHome:{
        flex:1,
        padding:35,
        alignItems:"center"
    },
    textHome:{
        marginTop:5,
        color:"white",
        fontSize:24 
    },
    Division:{
        flex:12,
        alignItems:"center",
    },
    cardVerify:{
        flex:1,
        width: "94%",
        position:"absolute",
        top:"-4%",
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
    },
    scrollStyle:{
        width:"100%",
        padding: 20,
        paddingTop:0
    },
    CPandNumber:{
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    boxSelect:{
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        paddingBottom:15,
        borderBottomWidth:1,
        borderColor:"#ebebeb",
        paddingTop: 20,
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