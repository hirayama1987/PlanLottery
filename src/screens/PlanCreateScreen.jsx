import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import CircleButton from "../components/CircleButton";
import firebase from 'firebase'


export default function PlanCreateScreen(props) {
  const {navigation} = props;
  const [planText, setPlanText] = useState('')

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const ref = db.collection('plans')
  //   const unsubscribe = ref.onSnapshot((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       console.log(doc.id,doc.data());
  //     });
  //   });
  //   return unsubscribe;
  // },[]);

  function handlePress(){
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/plans`);
    ref.add({
      bodyText: planText,
      updatedAt: new Date()
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
      })
      .catch((error) => {
        console.log('error', error);
      })
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => { setPlanText(text); }}
          style={styles.input}
          value={planText}
          autoFocus
        />
      </ScrollView>
      <CircleButton
        style={{ bottom: 80 }}
        name="plus"
        onPress={handlePress}
      ></CircleButton>
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
