import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Empty(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? Colors.black : Colors.white}}>
        Empty Screen
      </Text>
    </View>
  );
}

function Contact(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? Colors.black : Colors.white}}>
        Contact Screen
      </Text>
    </View>
  );
}

function About(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? Colors.black : Colors.white}}>
        About Screen
      </Text>
    </View>
  );
}

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? Colors.black : Colors.white}}>
        Home Screen
      </Text>
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
            switch (route.name) {
              case 'Home':
                icon = focused
                  ? solidIcons.faBuilding
                  : regularIcons.faBuilding;
                break;
              case 'About':
                icon = focused ? solidIcons.faUser : regularIcons.faUser;
                break;
              case 'Contact':
                icon = focused
                  ? solidIcons.faEnvelope
                  : regularIcons.faEnvelope;
                break;
              default:
                icon = focused
                  ? solidIcons.faQuestionCircle
                  : regularIcons.faQuestionCircle;
                break;
            }

            return <FontAwesomeIcon icon={icon}></FontAwesomeIcon>;
          },
          headerStyle: {
            backgroundColor: isDarkMode ? '#21262D' : '#e5e5e5',
          },
          headerTintColor: isDarkMode ? '#e5e5e5' : '#21262D',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Empty" component={Empty} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
