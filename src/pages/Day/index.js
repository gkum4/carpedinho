import React, { useState, useEffect } from 'react';

import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import backgroundImage from '../../assets/backgroundImage.png';

import NoteCard from '../../components/NoteCard'

import ActivityItem from '../../components/ActivityItem';

import styles from './styles'

import { daysData } from '../../data';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Day = ({ route }) => {
  const navigation = useNavigation();

  const [sectionPressed, setSectionPressed] = useState('notas');

  const { date } = route.params;

  const data = daysData.find((item) => item.date === date);

  const Content = () => {

    if(sectionPressed === 'notas') {
      return (
        <FlatList
          data={data.notes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 10}}>
              <TouchableOpacity style={styles.plusIconFrame} onPress={() => navigation.navigate('NoteEdit', {
                title: '',
                description: '',
              })}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          renderItem={({ item }) => (
            <NoteCard
              title={item.title}
              note={item.note}
              emotions={item.emotions}
              onPress={() => navigation.navigate('NoteEdit', {
                title: item.title,
                description: item.note,
              })}
            />
          )}
        />
      );
    }
    if(sectionPressed === 'atividades') {
      return (
        <View style={styles.activitiesContainer}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: '200%' }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
          >
            <View style={{flex:1}}>
              <FlatList
                data={data.activities.mine}
                keyExtractor={(item) => item.id}
                style={{width: '100%', height: '100%', flex: 1}}
                ListHeaderComponent={() => (
                  <View style={styles.activitiesTitleContainer}>
                    <Text style={styles.activitiesTitle}>
                      Meu dia
                    </Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <ActivityItem
                    title={item.title}
                    done={item.done}
                    id={item.id}
                  />
                )}
              />
              <View style={styles.activitiesSectionTextContainer}>
                <Text style={styles.activitiesSectionText}>
                  Recomendações
                </Text>
                <Icon name="arrow-right" color='#c4c4c4' size={14} style={{marginLeft: 5}}/>
              </View>
            </View>

            <View style={{flex: 1}}>
              <FlatList
                data={data.activities.mine}
                keyExtractor={(item) => item.id}
                style={{width: '100%', height: '100%', flex: 1}}
                ListHeaderComponent={() => (
                  <View style={styles.activitiesTitleContainer}>
                    <View style={styles.activitiesTitleIcon}>
                      <Icon name="circle" color="#03A9F4" size={20} />
                    </View>
                    <Text style={styles.activitiesTitle}>
                      Recomendações
                    </Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <ActivityItem
                    title={item.title}
                    done={item.done}
                    id={item.id}
                  />
                )}
              />
              <View style={styles.activitiesSectionTextContainer}>
                <Icon name="arrow-left" color='#c4c4c4' size={14} style={{marginRight: 5}}/>
                <Text style={styles.activitiesSectionText}>
                  Meu dia
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

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
              <Text style={styles.titleText}>{data.date}</Text>
            </View>
          </View>

          <View style={styles.sectionButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.sectionButtonContainer,
                sectionPressed === 'notas'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
              ]}
              onPress={() => {
                setSectionPressed('notas');
              }}
            >
              <Text style={styles.sectionButtonText}>
                Notas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sectionButtonContainer,
                sectionPressed === 'atividades'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
              ]}
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
