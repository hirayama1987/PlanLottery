import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlanDetailScreen from "./src/screens/PlanDetailScreen";
import PlanListScreen from "./src/screens/PlanListScreen";
import AppPlanScreen from "./src/screens/AddPlanScreen";
import PlanCreateScreen from "./src/screens/PlanCreateScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PlanList"
        screenOptions={{
          headerStyle:{ backgroundColor: '#FF8D41'},
          headerTitleStyle:{ color: '#FFF'},
        }}
      >
        <Stack.Screen name="PlanDetail" component={PlanDetailScreen} />
        <Stack.Screen name="PlanList" component={PlanListScreen} />
        <Stack.Screen name="AppPlan" component={AppPlanScreen} />
        <Stack.Screen name="PlanCreate" component={PlanCreateScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


