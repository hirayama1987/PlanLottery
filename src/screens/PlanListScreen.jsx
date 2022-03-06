import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlanList from "../components/PlanList";
import CircleButton from "../components/CircleButton";

export default function PlanListScreen() {
  return (
    <View style={styles.container}>
      <PlanList></PlanList>
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
