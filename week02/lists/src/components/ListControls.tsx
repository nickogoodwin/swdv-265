import React, {PropsWithChildren} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from '../../styles';
import ListFilter from './ListFilter';
import ListSort from './ListSort';

type Props = {
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
};

export default function ListControls({onFilter, onSort, asc}: Props) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}

ListControls.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};
