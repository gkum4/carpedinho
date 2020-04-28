import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Timeline from '../pages/Timeline';
import Day from '../pages/Day';

const Stack = createStackNavigator();


const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Timeline"
    >
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Day" component={Day} />
    </Stack.Navigator>
  );
}

export default Routes;
