import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

import backgroundImage from '../../assets/backgroundImage.png'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { useNavigation } from '@react-navigation/native'

import Slider from '@react-native-community/slider';

import { sadFeelings, happyFeelings, neutralFeelings } from '../../data';

const Timeline = ({ route }) => {
  const navigation = useNavigation();

  const { expression } = route.params;

  const data = {
    happy: [...happyFeelings],
    neutral: [...neutralFeelings],
    sad: [...sadFeelings],
  };

  data.happy.forEach((item, index) => {
    data.happy[index].intensity = 0;
  });

  data.neutral.forEach((item, index) => {
    data.neutral[index].intensity = 0;
  });

  data.sad.forEach((item, index) => {
    data.sad[index].intensity = 0;
  });


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

          <ScrollView>
            {data[expression].map((item) => {
              const [sliderState, setSliderState] = useState(0);
              return (
                <View style={styles.itemContainer} key={item.type}>
                  <Slider
                    style={{width: '100%', height: '100%', zIndex: 3, position: 'absolute'}}
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderState}
                    onValueChange={(value) => {
                      setSliderState(value);
                    }}
                    minimumTrackTintColor="#00000000"
                    maximumTrackTintColor="#00000000"
                    thumbTintColor="#00000000"
                  />

                  <View style={styles.itemContentContainer}>
                    <Image source={item.imgSrc} style={{width: 40, height: 40}}/>
                    <Text style={styles.itemText}>
                      {item.type}
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
                    style={[styles.itemColorContainer, {width: `${sliderState}%`}]}
                  />
                </View>
              );
            })}
          </ScrollView>


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
