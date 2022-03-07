import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlanList from "../components/PlanList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function PlanListScreen(props) {
  const {navigation} = props;
  useEffect(() =>{
    navigation.setOptions(
      {
        headerRight: () => <LogOutButton/>,
      }
    );
  }, []);
  return (
    <View style={styles.container}>
      <PlanList></PlanList>
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
