import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './count';
import { useCountContext } from './count';
export default function Mainscreen() {
    const CountContext= useCountContext();
    console.log(CountContext);
  return (
    <View>
      <View style={styles.bg}>
      <Text>{CountContext.count}</Text>
      <Button title='Press' onPress={()=> CountContext.setCount(CountContext.count+1)}></Button>
      <Text >{CountContext.count2}</Text>
      <Button title='Press' onPress={()=> CountContext.setCount2(CountContext.count+1)}></Button>
      <Text >{CountContext.count3}</Text>
      <Button title='Press' onPress={()=> CountContext.setCount3(CountContext.count+1)}></Button>
      <StatusBar style="auto" />
    </View>
    </View>
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