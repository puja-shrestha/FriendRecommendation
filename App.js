import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen';
import InterestScreen from './Components/InterestScreen'
import HomeScreen from './Components/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({

  MainScreen: { screen: MainScreen },
  InterestScreen: { screen: InterestScreen },
  HomeScreen: { screen: HomeScreen }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
