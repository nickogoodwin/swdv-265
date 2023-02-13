import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignSelf: 'stretch',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 3,
    shadowOpacity: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },

  // components/ThemeChanger
  themeChanger: {
    paddingHorizontal: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  // components/LoadingModal
  spinner: {
    marginTop: 10,
  },

  // components/DetailsModal
  detailsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsTextContainer: {},
  detailsText: {
    fontSize: 18,
    marginVertical: 10,
  },
  detailsButtonContainer: {},

  // pages/Coin
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    marginVertical: 10,
  },

  // pages/RateCard
  rateCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  codeText: {
    fontSize: 32,
  },
  rateText: {
    fontSize: 22,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
