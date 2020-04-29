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
    marginBottom: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 80,
  },
  itemEmotionContainer: {
    marginRight: 15,
  },
  itemEmotionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
  },
  itemVerticalBar: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.166)',
    width: 5,
  },
  itemHorizontalBar: {
    backgroundColor: '#828282',
    height: '40%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '85%',
  },
  itemNumberOfTimesText: {

  },
});

export default styles;
