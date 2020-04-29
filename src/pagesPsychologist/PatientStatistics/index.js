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

          <ScrollView style={styles.scrollContainer}>

          <View style={styles.itemContainer}>
            <View style={styles.itemEmotionContainer}>
              <Icon name="circle-thin" size={50} color="#fff" />
              <Text style={styles.itemEmotionText}>Emoção</Text>
            </View>

            <View style={styles.itemVerticalBar} />

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.itemHorizontalBar, {width: '70%'}]}>
                <Text style={styles.itemNumberOfTimesText}>
                  Número de vezes que a emoção foi registrada
                </Text>
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5}}>
                <Text style={styles.itemPercentage}>
                  Intensidade média da emoção
                </Text>
              </View>
            </View>
          </View>

            {statistics.map((item) => (
              <View style={styles.itemContainer} key={item.emotion}>

                <View style={styles.itemEmotionContainer}>
                  <Icon name="circle-thin" size={50} color="#fff" />
                  <Text style={styles.itemEmotionText}>{item.emotion}</Text>
                </View>

                <View style={styles.itemVerticalBar} />

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.itemHorizontalBar, {width: item.percentage}]}>
                    <Text style={styles.itemNumberOfTimesText}>
                      5
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginLeft: 5}}>
                    <Text style={styles.itemPercentage}>
                      {item.percentage}
                    </Text>
                  </View>
                </View>

              </View>
            ))}
          </ScrollView>

        </View>
      </ImageBackground>
    </>
  );
};

export default PatientStatistics;
