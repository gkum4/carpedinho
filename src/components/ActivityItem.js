import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ActivityItem({
  title,
  done,
  id,
  onDelete,
  onPress,
}) {
  return (
    <View style={styles.activitiesListItemContainer}>
      {done ? (
          <TouchableOpacity>
            <Icon name="check-circle" size={30} style={{ marginRight: 10 }} color="#fff"/>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity>
            <Icon name="circle-o" size={30} style={{ marginRight: 10 }} color="#fff"/>
          </TouchableOpacity>
        )}
      <Text style={styles.activitiesListItemText}>{title}</Text>
      <View style={styles.activitiesListItemTrashContainer}>
        <Icon name='trash-o' size={20} color="#fff"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activitiesContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.166)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 15,

  },
  activitiesTitleContainer: {
    marginBottom: 15,
  },
  activitiesTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  activitiesListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  activitiesListItemText: {
    color: '#fff',
    fontSize: 17,
  },
  activitiesListItemTrashContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  }
});
