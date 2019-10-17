import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Dashboard from "./Screen/Dashboard"

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard :{
    screen: Dashboard
  }
})

const App = createAppContainer(AppDrawerNavigator);

export default App;
