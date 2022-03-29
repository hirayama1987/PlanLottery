import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import firebase from 'firebase'

import PlanList from "../components/PlanList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function PlanListScreen(props) {
  const {navigation} = props;

  const [plans, setPlans] = useState([]);

  useEffect(() =>{
    navigation.setOptions(
      {
        headerRight: () => <LogOutButton/>,
      }
    );
  }, []);

  useEffect(() =>{
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () =>{};

    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/plans`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userPlans = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userPlans.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setPlans(userPlans);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。')
      });
    }
    return unsubscribe;
  },[]);

  return (
    <View style={styles.container}>
      <PlanList plans={plans}></PlanList>
      <CircleButton
        name="plus"
        onPress={() => {navigation.navigate('PlanCreate')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
