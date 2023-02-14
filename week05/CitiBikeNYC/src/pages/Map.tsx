import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import {useAppSelector} from '../hooks/reduxHooks';
import Colors from '../theme/Colors';
import Pdf from 'react-native-pdf';
import {WebView} from 'react-native-webview';

function Map(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const source = {
    uri: 'bundle-assets://nyc-bike-map-2022.pdf',
    cache: true,
    headers: {
      'Content-Type': 'application/pdf',
      Accept: 'application/pdf',
    },
  };
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
        <Pdf
          source={source}
          style={{width: '100%', height: '100%'}}
          onLoadComplete={numberOfPages =>
            console.log(`number of pages: ${numberOfPages}`)
          }></Pdf>
        <Text
          style={{color: isDarkMode ? Colors.dark.text : Colors.light.text}}>
          Map Screen
        </Text>
      </View>
    </View>
  );
}

export default Map;
