import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase'

import Button from "../components/Button";

export default function SignUpScreen(props) {

  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (userCredential) => {
          const {user} = userCredential;
          console.log(user.uid)
          navigation.reset({
            index: 0,
            routes:[{ name: 'PlanList'}],
          });
        })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.code);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>
          Sign Up
        </Text>
        <TextInput
          value={ email }
          onChangeText={(text) => {setEmail(text);}}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email address"
          textContentType="emailAddress"
        />
        <TextInput
          value={ password }
          onChangeText={(text) => {setPassword(text);}}
          style={styles.input}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes:[{ name: 'LogIn'}],
              });
            }}
          >
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FF8D41'
  },
  footer: {
    flexDirection: 'row'
  },
});
