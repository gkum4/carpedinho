import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    padding: 15,
    paddingBottom: 0,
  },
  topContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionButtonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  sectionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
    width: 120,
    height: 30,
    color: '#fff',
  },
  sectionButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 17,
  },
  activitiesContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.166)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 15,
    borderRadius: 8,
  },
  activitiesTitleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activitiesTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  activitiesTitleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  activitiesSectionTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  activitiesSectionText: {
    fontSize: 14,
    color: '#c4c4c4',
  },
})

export default styles
