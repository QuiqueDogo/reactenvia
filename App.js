import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainPage from './app/screens/mainPage';
import registerPage from './app/screens/registerPage';
import verifyPage from './app/screens/verifyPage';
import loginPage from './app/screens/loginPage';
import HomePage from './app/screens/HomePage';
import contRegisterPage from './app/screens/contRegisterPage';
import Generate from "./app/screens/Generate";
import Destination from "./app/screens/Destination";
import InfoPackage from "./app/screens/InfoPackage"
import GenerateGuides from "./app/screens/GenerateGuide";
import DetailInfo from "./app/screens/DetailInfo"

const NavStack = createStackNavigator({
    mainPage: { 
        screen: mainPage
    },
    registerPage: {
      screen: registerPage
    },
    contRegisterPage:{
      screen: contRegisterPage
    },
    loginPage: {
      screen: loginPage
    },
    verifyPage:{
      screen: verifyPage
    },
    HomePage:{
      screen: HomePage
    },
    Generate:{
      screen: Generate
    },
    Destination:{
      screen: Destination
    },
    InfoPackage:{
      screen: InfoPackage
    },
    GenerateGuides:{
      screen: GenerateGuides
    },
    DetailInfo:{
      screen: DetailInfo
    },
    },
    {
      initialRouteName:"Generate"
    }
   
);

const App = createAppContainer(NavStack);

export default App;
//https://medium.com/faun/building-an-international-react-native-phone-input-with-expo-and-native-base-9040d935e206

//https://codeburst.io/reusing-code-between-react-js-and-react-native-effectively-12bb4fbf7a70

//https://svg2jsx.herokuapp.com/