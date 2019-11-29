import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainPage from './app/screens/MainPage';
import RegisterPage from './app/screens/RegisterPage';
import VerifyPage from './app/screens/VerifyPage';
import LoginPage from './app/screens/LoginPage';
import HomePage from './app/screens/HomePage';
import contRegisterPage from './app/screens/contRegisterPage';
import Generate from "./app/screens/Generate";
import Destination from "./app/screens/Destination";
import Origin from "./app/screens/Origin";
import InfoPackage from "./app/screens/InfoPackage"
import GenerateGuide from "./app/screens/GenerateGuide";
import DetailInfo from "./app/screens/DetailInfo";
import Shipment from "./app/screens/Shipment";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { OriginState,DestinationState } from "./redux/reducer/Reducer";

// A very simple store
let store = createStore(combineReducers({
  OriginState: OriginState,
  DestinationState: DestinationState
}));

// Connect the screens to Redux
let GenerateContainer = connect( state => ({OriginState: state.OriginState,DestinationState:state.DestinationState}))(Generate);
let OriginContainer = connect( state => ({OriginState: state.OriginState, DestinationState:state.DestinationState}))(Origin);
let DestinationContainer = connect( state => ({OriginState: state.OriginState, DestinationState:state.DestinationState}))(Destination);


const NavStack = createStackNavigator({
    MainPage: { 
        screen: MainPage
    },
    RegisterPage: {
      screen: RegisterPage
    },
    contRegisterPage:{
      screen: contRegisterPage
    },
    LoginPage: {
      screen: LoginPage
    },
    VerifyPage:{
      screen: VerifyPage
    },
    HomePage:{
      screen: HomePage
    },
    Generate: GenerateContainer,
    Origin: OriginContainer,
    Destination: DestinationContainer,
    // Generate:{
    //   screen: Generate
    // },
    // Origin:{
    //   screen: Origin
    // },    
    // Destination:{
    //   screen: Destination
    // },    
    InfoPackage:{
      screen: InfoPackage
    },
    GenerateGuide:{
      screen: GenerateGuide
    },
    DetailInfo:{
      screen: DetailInfo
    },
    Shipment:{
      screen: Shipment
    },
    },
    {
      initialRouteName:"Generate"
    }
   
);

const Api = createAppContainer(NavStack);

class App extends Component {
render() {
  return (
    <Provider store={store}>
      <Api />
    </Provider>
  )
};
}

export default App;