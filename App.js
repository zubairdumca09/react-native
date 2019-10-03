import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/layout/Header'
import Game from './components/game'

export default function App() {
  return (
    <View>
      <Header title="Guess a number"/>
      <Game/>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 50
    }
})


