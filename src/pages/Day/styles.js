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
  listItemContainer: {
    height: 120,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    marginBottom: 10,
  },
  listItemTopContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  listItemTopLeftContainer: {
    flex: 1,
  },
  listeItemTopText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listItemTopRightContainer: {
    width: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  listItemBottomContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  listItemBottomLeftContainer: {
    flex: 1,
  },
  listItemBottomRightContainer: {
    width: 30,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  listItemNoteText: {
    fontSize: 15,
  },
})

export default styles
