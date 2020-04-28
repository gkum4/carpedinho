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
  topContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: "center",
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
  }
});

export default styles;
