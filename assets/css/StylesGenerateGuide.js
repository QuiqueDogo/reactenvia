import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    containerRegister:{
        flex:1,
        alignItems: "stretch",
        flexDirection: "column",
        backgroundColor:"#f3f4f7"
    },
    Division:{
        flex:12,
        alignItems:"center",
    },
    cardGenerate:{
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
})