import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Timeline from '../pages/Timeline';
import Day from '../pages/Day';
import NoteEdit from '../pages/NoteEdit';
import Informations from '../pages/Informations';

import PatientMenu from '../pagesPsychologist/PatientMenu';
import PatientStatistics from '../pagesPsychologist/PatientStatistics';

const Stack = createStackNavigator();


const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Informations"
    >
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Day" component={Day} />
      <Stack.Screen name="NoteEdit" component={NoteEdit} />
      <Stack.Screen name="Informations" component={Informations} />

      <Stack.Screen name="PatientMenu" component={PatientMenu} />
      <Stack.Screen name="PatientStatistics" component={PatientStatistics} />
    </Stack.Navigator>
  );
}

export default Routes;
