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
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.166)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  expressionIcon: {
    width: 100,
    height: 100,
  },
  nextButtonContainer: {
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default styles
