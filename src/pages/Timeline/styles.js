import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 15,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 34,
  },
  listItemTopFeelingColors: {
    height: 4,
    width: '100%',
    flexDirection: 'row',
  },
  listItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listItemStar: {
    marginRight: 10,
  },
  listItemText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  listItemIconsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  listItemBar: {
    marginLeft: 10,
    height: 30,
    width: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});

export default styles;
