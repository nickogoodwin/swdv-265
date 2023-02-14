import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {changeTheme} from '../store/ThemeSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import Colors from '../theme/Colors';

function ThemeChanger(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={styles.themeChanger}
      onPress={() => dispatch(changeTheme())}>
      <Icon
        name={isDarkMode ? 'white-balance-sunny' : 'moon-waxing-crescent'}
        size={30}
        color={isDarkMode ? Colors.dark.text : Colors.light.text}
      />
    </TouchableOpacity>
  );
}

export default ThemeChanger;
