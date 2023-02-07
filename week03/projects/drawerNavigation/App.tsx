import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          headerLeft: () => false,
          headerRight: () => <DrawerToggleButton />,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Empty" component={Empty} />
      </Drawer.Navigator>
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
