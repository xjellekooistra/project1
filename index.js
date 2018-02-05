//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () => (
  <View>
  <Header headerText={"Jelle's App"} />
  <AlbumList />
  </View>
);

//Render it to a device
AppRegistry.registerComponent('project1', () => App);
