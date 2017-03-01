//index.ios.js - place code here for IOS

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ProductsList from './src/components/ProductsList';


//Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Explore'} />
      <ProductsList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('fastapp', () => App);