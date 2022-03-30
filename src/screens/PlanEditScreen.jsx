import React, {useState} from 'react';
import { StyleSheet, View, TextInput, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { shape, string } from 'prop-types';
import CircleButton from "../components/CircleButton";
import firebase from "firebase";

export default function PlanEditScreen(props) {
  const {navigation, route} = props;
  const {id, bodyText} = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress(){
    const {currentUser} = firebase.auth();
    if(currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/plans`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      },{merge:true})
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView style={styles.inputContainer}>
        <TextInput
          value={body}
          style={styles.input}
          onChangeText={(text)=>{setBody(text);}}
        />
      </ScrollView>
      <CircleButton
        style={{ bottom: 80 }}
        name="check"
        onPress={handlePress}
      ></CircleButton>
    </KeyboardAvoidingView>
  );
}

PlanEditScreen.propTypes = {
  route: shape({
    params: shape({ id :string, bodyText: string}),
  }).isRequired,
};


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
