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
    justifyContent:'space-between'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 15,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.166)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  skipButton : {
    backgroundColor: '#03A9F4',
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  skipButtonText : {
    color:'white'
  },
  expressionIcon: {
    width: 100,
    height: 100,
  }
})

export default styles
