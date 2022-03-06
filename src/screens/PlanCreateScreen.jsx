import React from 'react';
import { StyleSheet, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import CircleButton from "../components/CircleButton";

export default function PlanCreateScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView style={styles.inputContainer}>
        <TextInput value="" style={styles.input} />
      </ScrollView>
      <CircleButton style={{ bottom: 80 }} name="plus"></CircleButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inputContainer: {
    padding: 19
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});
