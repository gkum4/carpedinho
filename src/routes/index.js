import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Timeline from '../pages/Timeline';
import Day from '../pages/Day';
import NoteEdit from '../pages/NoteEdit';
import Informations from '../pages/Informations';

import PatientMenu from '../pagesPsychologist/PatientMenu';
import PatientStatistics from '../pagesPsychologist/PatientStatistics';
import PatientRecommendations from '../pagesPsychologist/PatientRecommendations';

import Test from '../pages/Test';

const Stack = createStackNavigator();


const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Test"
    >
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Day" component={Day} />
      <Stack.Screen name="NoteEdit" component={NoteEdit} />
      <Stack.Screen name="Informations" component={Informations} />

      <Stack.Screen name="PatientMenu" component={PatientMenu} />
      <Stack.Screen name="PatientStatistics" component={PatientStatistics} />
      <Stack.Screen name="PatientRecommendations" component={PatientRecommendations} />


      <Stack.Screen name="Test" component={Test} />

    </Stack.Navigator>
  );
}

export default Routes;
