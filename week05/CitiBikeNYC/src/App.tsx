import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from './hooks/reduxHooks';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './theme/Colors';
import ThemeChanger from './components/ThemeChanger';
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          headerTitle: () => (
            <Text>
              <Icon name="bike" size={20}></Icon> Citi Bikes NYC{' '}
              <Icon name="bike" size={20}></Icon>
            </Text>
          ),
          drawerIcon: ({focused}) => {
            let icon;
            switch (route.name) {
              case 'About':
                icon = focused ? 'tree' : 'tree-outline';
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
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Drawer.Screen
          name="Map"
          component={Map}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
      </Drawer.Navigator>
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let icon;
            switch (route.name) {
              case 'Sample':
                icon = focused ? 'file' : 'file-outline';
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
          tabBarStyle: {
            backgroundColor: isDarkMode
              ? Colors.dark.ground
              : Colors.light.ground,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingBottom: 5,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
