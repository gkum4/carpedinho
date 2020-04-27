import React from 'react';

import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import backgroundImage from '../../assets/backgroundImage.png';

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles';

import { timelineData } from '../../data';

const Timeline = () => {

  const TimelineList = () => {
    return (
      <FlatList
        data={timelineData}
        keyExtractor={item => item.date}
        ListHeaderComponent={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Minha Timeline
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.listItemTopFeelingColors}>
              {item.colors.map((feeling) => (
                <View key={feeling} style={{backgroundColor: feeling, flex: 1}} />
              ))}
            </View>
            <View style={styles.listItemContainer}>
              <Icon name="star-o" size={20} style={styles.listItemStar}/>
              <Text style={styles.listItemText}>{item.date}</Text>
              <View style={styles.listItemIconsContainer}>
                {item.note && <Icon name="book" size={20} style={{ marginLeft: 10 }} />}
                {item.activities && <Icon name="list" size={20} />}
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.listItemBar}/>
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        <TimelineList />

      </ImageBackground>
    </View>
  );
}

export default Timeline;