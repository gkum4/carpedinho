import React, { useState } from 'react'

import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import backgroundImage from '../../assets/backgroundImage.png'

import NoteCard from '../../components/NoteCard'

import styles from './styles'

import { daysData } from '../../data'

import { useNavigation } from '@react-navigation/native'

const Day = () => {
  const navigation = useNavigation()

  const [sectionPressed, setSectionPressed] = useState('notas')

  const daySelected = '11 de Abril'

  const Content = () => {
    if (sectionPressed === 'notas') {
      return (
        <FlatList
          data={daysData.find(item => item.date === daySelected).notes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NoteCard
              title={item.title}
              note={item.note}
              emotions={item.emotions}
            />
          )}
        />
      )
    }
    if (sectionPressed === 'atividades') {
      return <View />
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
              <Icon name="arrow-left" size={40} color="#fff" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Dia 11</Text>
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
                setSectionPressed('notas')
              }}
            >
              <Text style={styles.sectionButtonText}>Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sectionButtonContainer,
                sectionPressed === 'atividades'
                  ? { backgroundColor: 'rgba(0,0,0,0.1)' }
                  : { backgroundColor: 'rgba(255,255,255,0.1)' },
              ]}
              onPress={() => {
                setSectionPressed('atividades')
              }}
            >
              <Text style={styles.sectionButtonText}>Atividades</Text>
            </TouchableOpacity>
          </View>

          <Content />
        </View>
      </ImageBackground>
    </>
  )
}

export default Day
