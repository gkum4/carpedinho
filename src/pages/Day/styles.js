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
    margin: 10,
    width: 120,
    height: 30,
    color: '#fff',
  },
  sectionButtonText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  notesListItemContainer: {
    height: 120,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    marginBottom: 10,
  },
  notesListItemTopContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  notesListItemTopLeftContainer: {
    flex: 1,
  },
  notesListItemTopText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  notesListItemTopRightContainer: {
    width: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  notesListItemBottomContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  notesListItemBottomLeftContainer: {
    flex: 1,
  },
  notesListItemBottomRightContainer: {
    width: 30,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  notesListItemNoteText: {
    fontSize: 15,
  },
  activitiesContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  activitiesTitleContainer: {
    marginBottom: 15,
  },
  activitiesTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  activitiesListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  activitiesListItemText: {
    fontSize: 17,
  },
  activitiesListItemTrashContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  }
})

export default styles
