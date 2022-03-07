import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase'

import PlanDetailScreen from "./src/screens/PlanDetailScreen";
import PlanListScreen from "./src/screens/PlanListScreen";
import AppPlanScreen from "./src/screens/AddPlanScreen";
import PlanCreateScreen from "./src/screens/PlanCreateScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import PlanEditScreen from "./src/screens/PlanEditScreen";

import { firebaseConfig } from "./env";
require('firebase/firestore');

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle:{ backgroundColor: '#FF8D41'},
          headerTitleStyle:{ color: '#FFF'},
          headerTintColor: '#fff',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      >
        <Stack.Screen name="PlanDetail" component={PlanDetailScreen} />
        <Stack.Screen name="PlanEdit" component={PlanEditScreen} />
        <Stack.Screen name="PlanList" component={PlanListScreen} />
        <Stack.Screen name="AppPlan" component={AppPlanScreen} />
        <Stack.Screen name="PlanCreate" component={PlanCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          optionos={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          optionos={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


