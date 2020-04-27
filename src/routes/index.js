import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Timeline from '../pages/Timeline';

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
    </Stack.Navigator>
  );
}

export default Routes;
