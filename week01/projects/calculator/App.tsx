/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button';
import Row from './src/components/Row';

function App(): JSX.Element {
  // Calculator
  const initialState = {
    currentValue: '0',
    operator: null,
    previousValue: null,
  };

  const [state, setState] = useState(initialState);

  function handleNumber(value: string, state: any) {
    if (state.currentValue === '0') {
      return {
        currentValue: `${value}`,
        operator: state.operator,
        previousValue: state.previousValue,
      };
    }
    return {
      currentValue: `${state.currentValue}${value}`,
      operator: state.operator,
      previousValue: state.previousValue,
    };
  }

  function handleEqual(state: any) {
    const current = parseFloat(state.currentValue);
    const previous = parseFloat(state.previousValue);
    const operator = state.operator;

    const resetState = {
      operator: null,
      previousValue: null,
    };

    if (operator === '/') {
      return {
        currentValue: previous / current,
        ...resetState,
      };
    }

    if (operator === '*') {
      return {
        currentValue: previous * current,
        ...resetState,
      };
    }

    if (operator === '+') {
      return {
        currentValue: previous + current,
        ...resetState,
      };
    }

    if (operator === '-') {
      return {
        currentValue: previous - current,
        ...resetState,
      };
    }

    return state;
  }

  function calculator(type: string, value: string, state: any) {
    switch (type) {
      case 'number':
        return handleNumber(value, state);
      case 'operator':
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: '0',
        };
      case 'equal':
        return handleEqual(state);
      case 'clear':
        return initialState;
      case 'posneg':
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case 'delete':
        console.log(state.currentValue.length);
        if (state.currentValue.length > 1) {
          return {
            currentValue: state.currentValue.slice(0, -1),
          };
        }
        return {
          currentValue: 0,
        };
      default:
        return state;
    }
  }

  function handlePress(type: string, value?: any) {
    console.log(state);
    setState(state => calculator(type, value, state));
  }

  // Theme
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };
  const buttonStyle = {
    backgroundColor: isDarkMode ? '#454545' : '#A9A9A9',
  };

  //App
  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        },
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[backgroundStyle, styles.calcDisplay]}>
        <Text style={[textStyle, {fontSize: 48}]}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
      </View>
      <View style={[backgroundStyle, styles.calcContainer]}>
        <Row>
          <Button
            style={buttonStyle}
            value="C"
            onPress={() => handlePress('clear')}></Button>
          <Button
            style={buttonStyle}
            value="+/-"
            onPress={() => handlePress('posneg')}></Button>
          <Button
            style={buttonStyle}
            value="Del"
            onPress={() => handlePress('delete')}></Button>
          <Button
            style={buttonStyle}
            value="÷"
            onPress={() => handlePress('operator', '/')}></Button>
        </Row>
        <Row>
          <Button
            style={buttonStyle}
            value="7"
            onPress={() => handlePress('number', 7)}></Button>
          <Button
            style={buttonStyle}
            value="8"
            onPress={() => handlePress('number', 8)}></Button>
          <Button
            style={buttonStyle}
            value="9"
            onPress={() => handlePress('number', 9)}></Button>
          <Button
            style={buttonStyle}
            value="x"
            onPress={() => handlePress('operator', '*')}></Button>
        </Row>
        <Row>
          <Button
            style={buttonStyle}
            value="4"
            onPress={() => handlePress('number', 4)}></Button>
          <Button
            style={buttonStyle}
            value="5"
            onPress={() => handlePress('number', 5)}></Button>
          <Button
            style={buttonStyle}
            value="6"
            onPress={() => handlePress('number', 6)}></Button>
          <Button
            style={buttonStyle}
            value="-"
            onPress={() => handlePress('operator', '-')}></Button>
        </Row>
        <Row>
          <Button
            style={buttonStyle}
            value="1"
            onPress={() => handlePress('number', 1)}></Button>
          <Button
            style={buttonStyle}
            value="2"
            onPress={() => handlePress('number', 2)}></Button>
          <Button
            style={buttonStyle}
            value="3"
            onPress={() => handlePress('number', 3)}></Button>
          <Button
            style={buttonStyle}
            value="+"
            onPress={() => handlePress('operator', '+')}></Button>
        </Row>
        <Row>
          <Button
            style={[buttonStyle, {flex: 5}]}
            value="0"
            onPress={() => handlePress('number', 0)}></Button>
          <Button
            style={buttonStyle}
            value="."
            onPress={() => handlePress('number', '.')}></Button>
          <Button
            style={buttonStyle}
            value="="
            onPress={() => handlePress('equal')}></Button>
        </Row>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calcDisplay: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  calcContainer: {
    flex: 3,
    padding: 10,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  calcButton: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    padding: 30,
    textAlign: 'center',
  },
  calcButtonText: {
    textAlign: 'center',
  },
});

export default App;
