import React from 'react';
import {Text, FlatList, View} from 'react-native';
import styles from '../../styles';
import {User} from '../types';
import {SvgXml} from 'react-native-svg';
import {createAvatar} from '@dicebear/core/lib/core';
import {avataaars} from '@dicebear/collection';
import {ListProps} from '../types';

type Props = {
  Controls: (props: ListProps) => React.ReactElement;
} & ListProps;

export default function List(props: Props) {
  return (
    <FlatList
      data={props.data}
      ListHeaderComponent={<props.Controls {...props} />}
      renderItem={({item}: {item: User}) => {
        item.avatar = createAvatar(avataaars, {
          seed: item.name,
        }).toString();

        return (
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <SvgXml xml={item.avatar} style={{width: 75, height: 75}} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Name: </Text>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Email: </Text>
                <Text>{item.email}</Text>
              </View>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Phone: </Text>
                <Text>{item.phone}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Website: </Text>
                <Text>{item.website}</Text>
              </View>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Catch-Phrase: </Text>
                <Text>{item.company.catchPhrase}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
