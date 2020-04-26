import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome'

import Diary from '../pages/Diary';
import Activities from '../pages/Activities';
import Timeline from '../pages/Timeline';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Diary') {
            iconName = 'book';
          }
          if (route.name === 'Timeline') {
            iconName = 'calendar';
          }
          if (route.name === 'Activities') {
            iconName = 'list';
          }

          return <Icon name={iconName} size={25} color={color}  />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#03A9F4',
        inactiveTintColor: '#fff',
        showLabel: false,
        tabStyle: { backgroundColor: '#444444' },
        style: { borderTopWidth: 0 },
      }}
    >
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Diary" component={Diary} />
      <Tab.Screen name="Activities" component={Activities} />
    </Tab.Navigator>
  );
}


const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabNavigator"
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default Routes;
