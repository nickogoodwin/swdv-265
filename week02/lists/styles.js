import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  spinner: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#252525',
  },

  card: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    backgroundColor: '#191919',
    borderRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
  },

  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flex: 2,
  },

  textSection: {
    margin: 5,
  },

  textLabel: {
    color: '#1b819d',
    fontWeight: 'bold',
  },

  filter: {
    height: 40,
    width: 200,
  },

  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: '#191919',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#ef233c',
  },
});
