import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CircleButton from "../components/CircleButton";
import firebase from 'firebase'

export default function AppPlanScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.planHeader}>
        <Text style={styles.planTitle}>新規追加</Text>
      </View>
      <ScrollView style={styles.planDetail}>
        <Text>プランの詳細</Text>
      </ScrollView>
      <CircleButton style={{ top: 112 }} name="edit-3"></CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  planHeader: {
    backgroundColor: '#FF8D41',
    height: 60,
    justifyContent: 'center',
    color: '#fff',
    padding: 19
  },
  planTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  planDetail: {
    padding: 19
  }
});
