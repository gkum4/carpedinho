import React, { useState } from 'react';

import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import backgroundImage from '../../assets/backgroundImage.png';

import styles from './styles';

import { daysData } from '../../data';

import { useNavigation } from '@react-navigation/native';

const Day = () => {
  const navigation = useNavigation();

  const [sectionPressed, setSectionPressed] = useState('notas');

  // const Content = () => {
  //   if(sectionPressed === 'notas') {
  //     return (
  //       <FlatList
  //         data={daysData['']}
  //       />
  //     );
  //   }
  //   if(sectionPressed === 'atividades') {
  //     return (
  //       <View>

  //       </View>
  //     );
  //   }
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.arrowLeftContainer}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={40} color="#fff"/>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Dia 11</Text>
          </View>
        </View>

        <View style={styles.sectionButtonsContainer}>
          <TouchableOpacity
            style={[styles.sectionButtonContainer, sectionPressed === 'notas' ? {backgroundColor: '#aeaeae'} : {backgroundColor: '#fff'}]}
            onPress={() => {
              setSectionPressed('notas');
            }}
          >
            <Text style={styles.sectionButtonText}>
              Notas
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sectionButtonContainer, sectionPressed === 'atividades' ? {backgroundColor: '#aeaeae'} : {backgroundColor: '#fff'}]}
            onPress={() => {
              setSectionPressed('atividades');
            }}
          >
            <Text style={styles.sectionButtonText}>
              Atividades
              </Text>
          </TouchableOpacity>
        </View>

        {/* <Content /> */}

      </ImageBackground>
    </View>
  );
}

export default Day;
