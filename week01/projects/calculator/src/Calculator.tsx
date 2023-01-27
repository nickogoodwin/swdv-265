import React from 'react';
import {useAppDispatch, useAppSelector} from './hooks/hooks';
import {changeTheme} from './store/ThemeSlice';
import {
  handleDelete,
  handleEqual,
  handleNumber,
  handleOperator,
  handlePosNeg,
  handleClear,
} from './store/CalculatorSlice';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

import Button from './components/Button';
import Row from './components/Row';

function Calculator(): JSX.Element {
  // Calculator
  const currentValue = useAppSelector(state => state.calculator.currentValue);
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };
  const utilityBtnStyle = {
    backgroundColor: isDarkMode ? '#303060' : '#9090C0',
  };
  const operatorBtnStyle = {
    backgroundColor: isDarkMode ? '#7070A0' : '#C0C0E0',
  };
  const numberBtnStyle = {
    backgroundColor: isDarkMode ? '#505050' : '#C0C0C0',
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
      <View style={[backgroundStyle, styles.themeSwitcherContainer]}>
        <TouchableOpacity
          style={[styles.themeSwitcherButton]}
          onPress={() => dispatch(changeTheme())}>
          <FontAwesomeIcon
            size={24}
            style={textStyle}
            icon={isDarkMode ? solidIcons.faSun : solidIcons.faMoon}
          />
        </TouchableOpacity>
      </View>
      <View style={[backgroundStyle, styles.calcDisplay]}>
        <Text style={[textStyle, {fontSize: 48}]}>{currentValue}</Text>
      </View>
      <View style={[backgroundStyle, styles.calcContainer]}>
        <Row>
          <Button
            style={utilityBtnStyle}
            textStyle={textStyle}
            value="C"
            onPress={() => handlePress('clear')}></Button>
          <Button
            textStyle={textStyle}
            style={[textStyle, utilityBtnStyle]}
            value="+/-"
            onPress={() => handlePress('posneg')}></Button>
          <Button
            textStyle={textStyle}
            style={[textStyle, utilityBtnStyle]}
            value="Del"
            onPress={() => handlePress('delete')}></Button>
          <Button
            textStyle={textStyle}
            style={operatorBtnStyle}
            value="÷"
            onPress={() => handlePress('operator', '/')}></Button>
        </Row>
        <Row>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="7"
            onPress={() => handlePress('number', 7)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="8"
            onPress={() => handlePress('number', 8)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="9"
            onPress={() => handlePress('number', 9)}></Button>
          <Button
            textStyle={textStyle}
            style={operatorBtnStyle}
            value="x"
            onPress={() => handlePress('operator', '*')}></Button>
        </Row>
        <Row>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="4"
            onPress={() => handlePress('number', 4)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="5"
            onPress={() => handlePress('number', 5)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="6"
            onPress={() => handlePress('number', 6)}></Button>
          <Button
            textStyle={textStyle}
            style={operatorBtnStyle}
            value="-"
            onPress={() => handlePress('operator', '-')}></Button>
        </Row>
        <Row>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="1"
            onPress={() => handlePress('number', 1)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="2"
            onPress={() => handlePress('number', 2)}></Button>
          <Button
            textStyle={textStyle}
            style={numberBtnStyle}
            value="3"
            onPress={() => handlePress('number', 3)}></Button>
          <Button
            textStyle={textStyle}
            style={operatorBtnStyle}
            value="+"
            onPress={() => handlePress('operator', '+')}></Button>
        </Row>
        <Row>
          <Button
            textStyle={textStyle}
            style={[numberBtnStyle, {flex: 5}]}
            value="0"
            onPress={() => handlePress('number', 0)}></Button>
          <Button
            textStyle={textStyle}
            style={[textStyle, utilityBtnStyle]}
            value="."
            onPress={() => handlePress('number', '.')}></Button>
          <Button
            textStyle={textStyle}
            style={operatorBtnStyle}
            value="="
            onPress={() => handlePress('equal')}></Button>
        </Row>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  themeSwitcherContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  themeSwitcherButton: {},
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

export default Calculator;
