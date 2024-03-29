import { StyleSheet,Platform } from "react-native";
export default StyleSheet.create({
  buttonFloating: {
    width: 250
  },
  buttonLoginFloating: {
    width: 250
  },
  viewFloat: {
    position: "absolute",
    top: Platform.OS == "android" ? 70 : 10
  },
  buttonStyleRegister: {
    borderWidth: 1,
    borderColor: "#02b2bc",
    borderRadius: 30,
    backgroundColor: "#02b2bc",
    height: 60
  },
  buttonStylesContainerRegister: {
    marginVertical: 10,
    width: 250,
    position: "absolute",
    bottom: Platform.OS == "android" ? -25 : -40
  },
  buttonStylesContainerLogin: {
    marginVertical: 10,
    width: 250,
    position: "absolute",
    bottom: Platform.OS == "android" ? -25 : -40
  },
  formStyles: {
    width: "80%",
    marginTop: 10
  },
  division: {
    flex: 1,
    alignItems: "center",
    marginTop: 15
  },
  divisionHome: {
    flex: 9,
    alignItems: "center",
    marginTop: 15
  },
  gradiantHome: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
    paddingTop: 40
  },
  gradiant: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
    paddingTop: 40
  },
  containerRegister: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: "#f3f4f7"
  },
  containerMain: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column"
  },
  background: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  containerButtons: {
    flex: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    flexDirection: "column"
  },
  textColor: {
    color: "white",
    paddingBottom: 10,
    letterSpacing: 2,
    fontSize: 32
  },
  containerImages: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35
  },
  logoImage: {
    width: 80,
    height: 80
  },
  submitSession: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "#02b2bc",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#02b2bc"
  },
  submitRegister: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "transparent",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff"
  },

  submitText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
    letterSpacing: 1.3
  },
  cardStyle: {
    flex: 1,
    width: "90%",
    position: "absolute",
    top: "-8%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 8
    },
    height: Platform.OS == "android" ? "50%" : "40%"
  },
  buttoncontRegister2: {
    borderWidth: 1,
    borderColor: "#02b2bc",
    borderRadius: 30,
    backgroundColor: "#02b2bc",
    height: 60,
    position: "absolute",
    top: Platform.OS === "android" ? 220 : 195,
    width: 250
  },
  cardVerify: {
    flex: 1,
    width: "90%",
    position: "absolute",
    top: "-8%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 8
    },
    height: "90%"
  },
  scrollStyle: {
    flexBasis: 70,
    width: "100%",
    borderRadius: 15
  },
  textTerms: {
    flexBasis: 90,
    textAlign: "center",
    color: "#969696",
    fontSize: 13,
    paddingTop: 15
  },
  buttonVerify: {
    width: 250,
    position: "absolute",
    bottom: 80
  },
  division: {
    flex: 9,
    alignItems: "center",
    marginTop: 15
  },
  cardHome: {
    width: "45%",
    position: "absolute",
    top: "-7%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 17,
    height: "8%"
  },

  boxMiddle: {
    flex: 2,
    marginTop: 20,
    marginBottom: 20,
    padding: 25,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 8
    },
    height: "8%"
  },
  scrollHome: {
    flex: 2,
    width: "100%"
  },
  scrollContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  textMoney: {
    fontSize: 18
  },
  buttonHome: {
    position: "relative",
    bottom: -45,
    left: Platform.OS == "android" ? "5%" : "12%",
    width: 250
  },
  containerBoxInformative: {
    backgroundColor: "#2c3e50",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 15,
    marginRight: 35,
    width: 220,
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
    height: "55%"
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  textOneBox: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    color: "#7e7e7e"
  },
  textTwoBox: {
    fontSize: 40,
    paddingLeft: 20,
    color: "#01b0bb"
  },
  inputStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    height: 50,
    paddingLeft: 14,
    borderColor: "#dbdbdb",
    marginTop: 18,
    fontSize: 15,
    fontWeight: "200"
  },

  buttonCloseModal: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    width: "80%",
    height: 50,
    paddingLeft: 14,
    borderColor: "#dbdbdb",
    marginTop: 18,
    fontSize: 15,
    fontWeight: "200",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#02b2bc"
  },
  registerCardSection: {
    flex: 1,
    width: "90%",
    position: "absolute",
    top: "-8%",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 8
    }
  },
  phoneInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    height: 50,
    borderColor: "#dbdbdb",
    marginTop: 18,
    fontSize: 15,
    fontWeight: "200"
  },
  codePhone: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    height: 48,
    backgroundColor: "#e5e5e5",
    paddingLeft: 14,
    borderBottomStartRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomEndRadius: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: "black",
    fontWeight: "bold"
  },
  drawer: {
    flex: 3,
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%"
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  menuLayout: {
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: "100%"
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    zIndex: 0,
    elevation: 5
  },
  menu: {
    flexDirection: "column",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 300
  },
  buttonSub: {
    backgroundColor: "white",
    width: "100%"
  },
  titleButton: {
    marginRight: "auto",
    color: "black",
    marginLeft: 16
  },
  menuAndroid: {
    flexDirection: "column",
    width: "95%",
    height: 300,
    elevation: 5
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
    margin: 2,
    borderColor: "#0099A8",
    borderWidth: 10,
    backgroundColor: "#FEFEFE"
  },
  textItemHome: {
    color: "#0099A8",
    fontSize: 32,
    fontWeight: "bold"
  }
});