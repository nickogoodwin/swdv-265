import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Empty from './src/pages/Empty';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const options = {
    headerStyle: {
      backgroundColor: isDarkMode ? '#21262D' : '#e5e5e5',
    },
    headerTintColor: isDarkMode ? '#e5e5e5' : '#21262D',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: isDarkMode ? '#21262D' : '#e5e5e5',
            },
            headerTintColor: isDarkMode ? '#e5e5e5' : '#21262D',
          }}
        />
        <Stack.Screen name="About" component={About} options={options} />
        <Stack.Screen name="Contact" component={Contact} options={options} />
        <Stack.Screen name="Empty" component={Empty} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
