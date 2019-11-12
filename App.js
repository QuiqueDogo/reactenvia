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
import DetailInfo from "./app/screens/DetailInfo"

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
    Generate:{
      screen: Generate
    },
    Destination:{
      screen: Destination
    },    
    Origin:{
      screen: Origin
    },    
    InfoPackage:{
      screen: InfoPackage
    },
    GenerateGuide:{
      screen: GenerateGuide
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