import React from 'react';
import {useColorScheme, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavMenu from '../components/NavMenu';

function Empty({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter},
        ]}>
        <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>
          Empty Screen
        </Text>
      </View>
      <View style={{flex: 1}}>
        <NavMenu navigation={navigation}></NavMenu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Empty;
