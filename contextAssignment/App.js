import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './src/count';
import { useCountContext } from './src/count';
import Mainscreen from './src/main';

export default function App() {
  const CountContext= useCountContext();
  console.log(CountContext);
  return (
    <CountContextProvider>
    <Mainscreen>
    </Mainscreen>
    </CountContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:15,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    backgroundColor:"antiquewhite"
  },
  bg: {
    marginTop:15,
    backgroundColor: '#f0ffff',
    padding:15
  }
});