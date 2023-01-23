import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type RowProps = PropsWithChildren<{}>;

function Row(props: RowProps): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {props.children}
    </View>
  );
}

export default Row;
