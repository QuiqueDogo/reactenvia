import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainPage from './app/screens/mainPage';
import registerPage from './app/screens/registerPage';

const NavStack = createStackNavigator({
    mainPage: { 
        screen: mainPage
    },
    registerPage: {
      screen: registerPage
    }
});

const App = createAppContainer(NavStack);

export default App;
