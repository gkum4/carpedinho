import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop: 40 + getStatusBarHeight(),
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    paddingHorizontal: 60,
    alignItems:'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 40,
  },
  titleText: {
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign:'center',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor:'#fff',
    color: '#fff',
    marginBottom: 30,
    width: '100%',
    paddingVertical: 8,
    fontSize: 17,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.166)',
  },
  containerCheckBox: {
    marginTop: 10,
    flexDirection: 'row',
  },
  checkBoxIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    color:'#FFFFFF',
    marginHorizontal: 5,
    fontSize: 14,
    textAlign:'center',
  },
  containerButton: {
    marginTop: 40,
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  containerText3: {
    color:'#fff',
    fontSize: 18,
  }
});

export default styles;
