import React from 'react';
import {useAppSelector} from './hooks/reduxHooks';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './theme/Colors';
import ThemeChanger from './components/ThemeChanger';
import Coin from './pages/Coin';
import Rates from './pages/Rates';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let icon;
            let color = isDarkMode ? Colors.dark.text : Colors.light.text;
            switch (route.name) {
              case 'Rates':
                icon = focused ? 'hand-coin' : 'hand-coin-outline';
                break;
              case 'Bitcoin':
                icon = 'bitcoin';
                color = focused ? Colors.light.coin : Colors.dark.coin;
                break;
              default:
                icon = focused ? 'help-circle' : 'help-circle-outline';
                break;
            }

            return <Icon name={icon} size={20} color={color}></Icon>;
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
          name="Bitcoin"
          component={Coin}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
        <Tab.Screen
          name="Rates"
          component={Rates}
          options={{
            headerRight: () => <ThemeChanger />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
