import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainPage from './app/screens/mainPage';
import registerPage from './app/screens/registerPage';
import verifyPage from './app/screens/verifyPage'
import loginPage from './app/screens/loginPage'
import homePage from './app/screens/mainPage'

const NavStack = createStackNavigator({
    mainPage: { 
        screen: mainPage
    },
    registerPage: {
      screen: registerPage
    },
    loginPage: {
      screen: loginPage
    },
    verifyPage:{
      screen: verifyPage
    },
    homePage:{
      screen: homePage
    }
});

const App = createAppContainer(NavStack);

export default App;
