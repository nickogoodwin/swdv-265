import React from 'react';
import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

function EmptyScreen(): JSX.Element {
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <Text>Empty</Text>
    </View>
  );
}

function HomeScreen(): JSX.Element {
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={[styles.center, {flex: 1, backgroundColor: 'green'}]}>
        <Text style={{fontSize: 24}}>Nicko Goodwin</Text>
        <Text>Project03 - Navigation</Text>
      </View>
      <View
        style={[
          styles.center,
          {
            flex: 4,
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
      <View style={[styles.center, {flex: 4, backgroundColor: 'gray'}]}>
        <Text style={{fontSize: 24}}>Flexbox</Text>
      </View>
      <View style={[styles.center, {flex: 1, backgroundColor: 'teal'}]}>
        <Text style={{fontSize: 24}}>SWDV 265</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused ? solidIcons.faBuilding : regularIcons.faBuilding;
            } else {
              icon = focused
                ? solidIcons.faQuestionCircle
                : regularIcons.faQuestionCircle;
            }
            return <FontAwesomeIcon icon={icon}></FontAwesomeIcon>;
          },
          headerStyle: {
            backgroundColor: isDarkMode ? '#21262D' : '#e5e5e5',
          },
          headerTintColor: isDarkMode ? '#e5e5e5' : '#21262D',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Page 1" component={EmptyScreen} />
        <Tab.Screen name="Page 2" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
