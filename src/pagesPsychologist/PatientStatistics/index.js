import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import backgroundImage from '../../assets/backgroundImage.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { statistics } from '../../data';

const PatientStatistics = () => {
  const navigation = useNavigation();

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
              <Text style={styles.titleText}>Estatísticas</Text>
            </View>
          </View>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

            <View style={styles.itemContainer}>
              <View style={styles.itemEmotionContainer}>
                <Icon name="circle-thin" size={50} color="#828282" />
                <Text style={styles.itemPercentageText}>%</Text>
              </View>

              <View style={styles.itemVerticalBar} />

              <View style={styles.itemRightContainer}>

                <Text style={styles.itemEmotionText}>Emoção</Text>

                <View style={styles.itemPercentageBarViewContainer}>
                  <View style={[styles.itemPercentageBarContainer, {width: '80%'}]}>
                    <Text style={styles.itemNumberOfTimesText}>Número de vezes que foi registrado</Text>
                  </View>
                </View>

              </View>
            </View>

            {statistics.map((item) => (
              <View style={styles.itemContainer}>
                <View style={styles.itemEmotionContainer}>
                  <Icon name="circle-thin" size={50} color="#fff" />
                  <Text style={styles.itemPercentageText}>{item.percentage}</Text>
                </View>

                <View style={styles.itemVerticalBar} />

                <View style={styles.itemRightContainer}>

                  <Text style={styles.itemEmotionText}>{item.emotion}</Text>

                  <View style={styles.itemPercentageBarViewContainer}>
                    <View style={[
                      styles.itemPercentageBarContainer,
                      {width: item.percentage, backgroundColor: item.color}]}>
                      <Text style={styles.itemNumberOfTimesText}>{item.numberOfTimes}</Text>
                    </View>
                  </View>

                </View>
              </View>
            ))}

            <View style={styles.recommendationsFrequencyTable}>

            </View>

          </ScrollView>

        </View>
      </ImageBackground>
    </>
  );
};

export default PatientStatistics;
