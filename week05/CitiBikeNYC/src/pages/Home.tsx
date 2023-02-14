import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import {useAppSelector} from '../hooks/reduxHooks';
import Colors from '../theme/Colors';

function Home(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.dark.ground
            : Colors.light.ground,
        },
      ]}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.dark.surface
              : Colors.light.surface,
          },
        ]}>
        <Text
          style={{color: isDarkMode ? Colors.dark.text : Colors.light.text}}>
          Home Screen
        </Text>
      </View>
    </View>
  );
}

export default Home;
