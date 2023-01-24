import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from './hooks/hooks';
import {
  handleDelete,
  handleEqual,
  handleNumber,
  handleOperator,
  handlePosNeg,
  handleClear,
  selectCurrentValue,
} from './store/CalculatorSlice';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/Button';
import Row from './components/Row';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  // Calculator
  const currentValue = useAppSelector(state => state.calculator.currentValue);
  const dispatch = useAppDispatch();

  const handlePress = (type: string, value?: any) => {
    switch (type) {
      case 'number':
        return dispatch(handleNumber(value));
      case 'operator':
        return dispatch(handleOperator(value));
      case 'equal':
        return dispatch(handleEqual());
      case 'clear':
        return dispatch(handleClear());
      case 'posneg':
        return dispatch(handlePosNeg());
      case 'delete':
        return dispatch(handleDelete());
      default:
        return;
    }
  };

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
        <Text style={[textStyle, {fontSize: 48}]}>{currentValue}</Text>
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
