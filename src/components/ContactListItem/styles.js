import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  contactContainer: {
    borderBottomWidth: 1,
    padding: 5,
  },
  name: {
    fontSize: 25,
    alignSelf: 'center',
  },
  phoneNumber: {
    fontSize: 15,
    opacity: 0.5,
    alignSelf: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    borderWidth: 1,
  },
  iconRowItem: {
    flexDirection: 'row',
  },
});