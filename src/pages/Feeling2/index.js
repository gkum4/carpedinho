import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native'

import backgroundImage from '../../assets/backgroundImage.png'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { timelineData } from '../../data'
import { useNavigation } from '@react-navigation/native'

import felizIcon from '../../assets/expressions/felizIcon.png';
import neutroIcon from '../../assets/expressions/neutroIcon.png';
import tristeIcon from '../../assets/expressions/tristeIcon.png';
import { FlatList } from 'react-native-gesture-handler'

const Timeline = () => {
  const navigation = useNavigation();

  const list = [
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
    {
      emotion: 'Feliz',
      description: 'Quando....',
    },
  ]

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
              <Text style={styles.titleText}>O que você está sentindo?</Text>
            </View>
          </View>

          <FlatList
            data={list}
            style={styles.listContainer}
            renderItem={() => (
              <View>

              </View>
            )}
          />

        </View>
      </ImageBackground>
    </>
  )
}

export default Timeline
