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

  const daySelected = '11 de Abril';

  const Content = () => {
    const data = daysData.find((item) => item.date === daySelected);
    if(sectionPressed === 'notas') {
      return (
        <FlatList
          data={data.notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.notesListItemContainer}>
              <View style={styles.notesListItemTopContainer}>
                <View style={styles.notesListItemTopLeftContainer}>
                  <Text style={styles.notesListItemTopText}>
                    {item.title}
                  </Text>
                </View>
                <View style={styles.notesListItemTopRightContainer}>
                  <Icon name="trash-o" size={20} style={{ paddingLeft: 10 }}/>
                  {item.emotions.map((emotion) => (
                    <Icon key={emotion} name="circle-o" size={20} style={{ paddingLeft: 5 }} color={emotion} />
                  ))}
                </View>
              </View>
              <View style={styles.notesListItemBottomContainer}>
                <View style={styles.notesListItemBottomLeftContainer}>
                  <Text style={styles.notesListItemNoteText}>
                    {item.note}
                  </Text>
                </View>
                <View style={styles.notesListItemBottomRightContainer}>
                  <Icon name="microphone" size={20} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      );
    }
    if(sectionPressed === 'atividades') {
      return (
        <FlatList
          data={data.activities.mine}
          keyExtractor={(item) => item.id}
          style={styles.activitiesContainer}
          ListHeaderComponent={() => (
            <View style={styles.activitiesTitleContainer}>
              <Text style={styles.activitiesTitle}>
                Meu dia
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.activitiesListItemContainer}>
              {item.done ? (
                  <TouchableOpacity>
                    <Icon name="dot-circle-o" size={30} style={{ marginRight: 10 }}/>
                  </TouchableOpacity>
                )
                : (
                  <TouchableOpacity>
                    <Icon name="circle-o" size={30} style={{ marginRight: 10 }}/>
                  </TouchableOpacity>
                )}
              <Text style={styles.activitiesListItemText}>{item.title}</Text>
              <View style={styles.activitiesListItemTrashContainer}>
                <Icon name='trash-o' size={20} />
              </View>
            </View>
          )}
        />
      );
    }
  }

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
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

          <Content />
        </View>
      </ImageBackground>
    </>
  );
}

export default Day;
