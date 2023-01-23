import React from 'react';
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from 'react-native';

type ButtonProps = {
  value: string;
  style: object;
  onPress: any;
};

function Button(props: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {flex: 1, margin: 5, borderRadius: 15, padding: 30},
  text: {textAlign: 'center'},
});

export default Button;
