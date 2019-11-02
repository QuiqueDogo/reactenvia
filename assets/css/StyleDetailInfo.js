import { StyleSheet,Platform } from "react-native";

export default  StyleSheet.create({
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
    cardDetail:{
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
        height:100
    },
    content:{
        height:100,
        width:"100%",
    },
    cardView:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    ImageStyle:{
        flex:1,
        height:50,
        width:30,
        marginLeft:13
    },
    PriceText:{
        color:"#014b74",
        fontSize:19
    },
    TimeText:{
        color:"#a2a2a2",
        fontSize:13,
        fontStyle:"italic"
    },
    containerPriceMoney:{
        flex:2,
        alignItems:"flex-end",
    }
})