import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as icons from '@fortawesome/free-regular-svg-icons';

function App(): JSX.Element {
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={[styles.center, {flex: 1, backgroundColor: 'green'}]}>
        <Text style={{fontSize: 24}}>Nicko Goodwin</Text>
        <Text>Project02 - Flexbox</Text>
      </View>
      <View
        style={[
          styles.center,
          {
            flex: 4,
            backgroundColor: 'gray',
          },
        ]}>
        <Image
          resizeMode={'cover'}
          style={styles.logo}
          source={{
            uri: 'https://cwi.edu/sites/all/themes/huckleberry/favicon/android-chrome-512x512.png',
          }}
        />
      </View>
      <View style={[styles.center, {flex: 4}]}>
        <Text style={{fontSize: 24}}>Flexbox</Text>
      </View>
      <View style={[styles.center, {flex: 1, backgroundColor: 'teal'}]}>
        <Text style={{fontSize: 24}}>SWDV 265</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.center,
            {
              flex: 1,
              justifyContent: 'center',
              padding: 20,
            },
          ]}>
          <FontAwesomeIcon
            icon={icons.faArrowAltCircleLeft}
            color={'white'}
            size={32}
          />
        </Pressable>
        <Pressable style={[styles.center, {flex: 1, justifyContent: 'center'}]}>
          <FontAwesomeIcon
            icon={icons.faArrowAltCircleRight}
            color={'white'}
            size={32}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    aspectRatio: 1,
    width: '50%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});

export default App;
