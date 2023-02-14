import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from './hooks/reduxHooks';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './theme/Colors';
import ThemeChanger from './components/ThemeChanger';
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          headerTitle: () => (
            <Text
              style={{
                color: isDarkMode ? Colors.dark.text : Colors.light.text,
                fontSize: 24,
              }}>
              <Icon name="bike" size={30}></Icon> BikeApp
            </Text>
          ),
          headerRight: () => <ThemeChanger />,
          drawerIcon: ({focused}) => {
            let icon;
            switch (route.name) {
              case 'About':
                icon = focused ? 'bike-fast' : 'bike';
                break;
              case 'Map':
                icon = focused ? 'map' : 'map-outline';
                break;
              case 'Home':
                icon = focused ? 'home' : 'home-outline';
                break;
              default:
                icon = focused ? 'help-circle' : 'help-circle-outline';
            }

            return (
              <Icon
                name={icon}
                size={20}
                color={
                  isDarkMode ? Colors.dark.text : Colors.light.text
                }></Icon>
            );
          },
          headerStyle: {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerTintColor: isDarkMode ? Colors.dark.text : Colors.light.text,
          drawerStyle: {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
          },
          drawerLabelStyle: {
            color: isDarkMode ? Colors.dark.text : Colors.light.text,
          },
        })}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
