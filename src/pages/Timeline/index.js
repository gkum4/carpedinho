import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

import backgroundImage from '../../assets/backgroundImage.png'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { timelineData } from '../../data'
import { useNavigation } from '@react-navigation/native'

const Timeline = () => {
  const navigation = useNavigation()
  const TimelineList = () => {
    return (
      <FlatList
        data={timelineData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Minha Timeline</Text>
            <Text style={styles.userIdText}>Seu ID: @joaodasneves</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Day', {
              date: item.date,
            })}
          >
            <View style={styles.listItemContainer}>
              <View style={styles.listItemTopFeelingColors}>
                {item.colors.map(feeling => (
                  <View
                    key={feeling}
                    style={{ backgroundColor: feeling, flex: 1, borderRadius: 20 }}
                  />
                ))}
              </View>
              <View style={styles.listItemRowContainer}>
                <Icon name="star-o" size={20} style={styles.listItemStar} />
                <Text style={styles.listItemText}>{item.date}</Text>
                <View style={styles.listItemIconsContainer}>
                  {item.note && (
                    <Icon name="book" size={20} style={{ marginLeft: 10 }} color="#E0E0E0"/>
                  )}
                  {item.activities && <Icon name="list" size={20} color="#E0E0E0"/>}
                </View>
              </View>

            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.listItemBar} />}
      />
    )
  }

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <TimelineList />
        </View>
      </ImageBackground>
    </>
  )
}

export default Timeline
