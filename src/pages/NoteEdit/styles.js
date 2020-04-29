import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
    paddingBottom: getBottomSpace(),
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
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  doneButtonContainer: {
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  doneButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  noteContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.166)',
    marginTop: 15,
    borderRadius: 8,
    padding: 10,
  },
  noteTitleTextInput: {
    width: '100%',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  noteBodyTextInput: {
    flex: 1,
    fontSize: 17,
    color: '#fff',
  },
  micIconContainer: {
    backgroundColor: '#03A9F4',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10 + getBottomSpace(),
    right: 10,
  },
  camIconContainer: {
    backgroundColor: '#03A9F4',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10 + getBottomSpace(),
    right: 80,
  }
});

export default styles;
