import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>PlanLottery</Text>
        <Text style={styles.appBarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 84,
    backgroundColor: '#FF8D41',
    justifyContent: 'flex-end'
  },
  appBarInner: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  appBarTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold'
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)'
  },
});
