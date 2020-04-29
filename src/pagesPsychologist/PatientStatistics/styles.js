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
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemPercentageText: {
    color: '#fff',
    fontSize: 11,
  },
  itemEmotionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 2,
  },
  itemVerticalBar: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.166)',
    width: 5,
  },
  itemRightContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  itemPercentageBarViewContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  itemPercentageBarContainer: {
    backgroundColor: '#828282',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  itemNumberOfTimesText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default styles;
