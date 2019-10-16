import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainPage from './app/screens/mainPage';
import registerPage from './app/screens/registerPage';
import verifyPage from './app/screens/verifyPage'
import loginPage from './app/screens/loginPage'
import homePage from './app/screens/homePage'
import contRegisterPage from './app/screens/contRegisterPage'

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
    homePage:{
      screen: homePage
    },
    },
   {
    initialRouteName: 'homePage',
   } 
);

const App = createAppContainer(NavStack);

export default App;
