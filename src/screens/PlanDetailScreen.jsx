import React, {useEffect, useState} from 'react';
import { shape, string } from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CircleButton from "../components/CircleButton";
import {dateToString} from "../utils";
import firebase from "firebase";

export default function PlanDetailScreen(props) {
  const {navigation, route} = props;
  const { id } = route.params;
  console.log(id);

  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();

    let unsubscribe = () => {};
    if (currentUser){
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/plans`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setPlan({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        })
      });
    }
    return unsubscribe;
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.planHeader}>
        <Text style={styles.planTitle}>{plan && plan.bodyText}</Text>
        <Text style={styles.planDate}>{plan && dateToString(plan.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.planDetail}>
        <Text>プランの詳細</Text>
      </ScrollView>
      <CircleButton
        style={{ top: 112 }}
        name="edit-3"
        onPress={() => {navigation.navigate('PlanEdit')}}
      ></CircleButton>
    </View>
  );
}

PlanDetailScreen.propTypes = {
  route: shape({
    params: shape({ id :string}),
  }).isRequired,
};

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
  planDate: {
    color: '#fff',
    fontSize: 12,
  },
  planDetail: {
    padding: 19
  }
});
