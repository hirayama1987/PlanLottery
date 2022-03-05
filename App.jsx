import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from "./src/components/AppBar";
import Memolist from "./src/components/Memolist";
import CircleButton from "./src/components/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Memolist></Memolist>
      <CircleButton>a</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
