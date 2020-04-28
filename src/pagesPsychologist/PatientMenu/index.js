import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from '../../assets/backgroundImage.png';

import styles from './styles';

const PatientMenu = () => {
  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>

        </View>
      </ImageBackground>
    </>
  );
}

export default PatientMenu;
