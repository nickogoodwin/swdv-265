import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import styles from '../../styles';
import {debounce} from 'lodash';

type Props = {
  onFilter: (text: string) => void;
};

export default function ListFilter({onFilter}: Props) {
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Search"
        style={styles.filter}
        onChangeText={onFilter}
      />
    </View>
  );
}

ListFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
