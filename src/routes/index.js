import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Informations from '../pages/Informations';
import Lock from '../pages/Lock';
import Timeline from '../pages/Timeline';
import Day from '../pages/Day';
import Feeling from '../pages/Feeling';
import Feeling2 from '../pages/Feeling2';
import NoteEdit from '../pages/NoteEdit';

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
      initialRouteName="Informations"
    >
      <Stack.Screen name="Lock" component={Lock} />
      <Stack.Screen name="Informations" component={Informations} />
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Day" component={Day} />
      <Stack.Screen name="Feeling" component={Feeling} />
      <Stack.Screen name="Feeling2" component={Feeling2} />
      <Stack.Screen name="NoteEdit" component={NoteEdit} />

      <Stack.Screen name="PatientMenu" component={PatientMenu} />
      <Stack.Screen name="PatientStatistics" component={PatientStatistics} />
      <Stack.Screen name="PatientRecommendations" component={PatientRecommendations} />


      <Stack.Screen name="Test" component={Test} />

    </Stack.Navigator>
  );
}

export default Routes;
