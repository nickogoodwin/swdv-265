import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

export interface NavMenuProps {
  navigation: NavigationProp<any, any>;
}

function NavMenu(props: NavMenuProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('About')}>
        <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
        <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>
          Contact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Empty')}>
        <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>
          Empty
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavMenu;
