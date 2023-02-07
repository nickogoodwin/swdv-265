import React from 'react';
import {View} from 'react-native';
import ListContainer from './src/components/ListContainer';
import styles from './styles';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <ListContainer />
    </View>
  );
}
export default App;
