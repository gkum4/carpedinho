import React, { useState } from 'react'
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

import { useNavigation } from '@react-navigation/native'

import Slider from '@react-native-community/slider';

const Timeline = () => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);

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

          <View style={styles.itemContainer}>
            <Slider
              style={{width: '100%', height: '100%', zIndex: 3, position: 'absolute'}}
              minimumValue={0}
              maximumValue={100}
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
              minimumTrackTintColor="#00000000"
              maximumTrackTintColor="#00000000"
              thumbTintColor="#00000000"
            />

            <View style={styles.itemContentContainer}>
              <Icon name='circle-o' size={50} color="#fff" />
              <Text style={styles.itemText}>
                Resiliência
              </Text>
            </View>

            <View style={styles.itemRightContainer}>
              <TouchableOpacity
                style={styles.itemQuestionMarkContainer}
                onPress={() => console.log('Button pressed')}
              >
                <Icon name="question" size={20} color="#fff"/>
              </TouchableOpacity>
            </View>

            <View
              style={[styles.itemColorContainer, {width: `${sliderValue}%`}]}
            />
          </View>





          {/* <FlatList
            data={list}
            style={styles.listContainer}
            renderItem={() => (
              <View>

              </View>
            )}
          /> */}

        </View>
      </ImageBackground>
    </>
  )
}

export default Timeline
