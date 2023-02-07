import React from 'react';
import {Text, FlatList, View} from 'react-native';
import styles from '../../styles';
import {SvgXml} from 'react-native-svg';
import {createAvatar} from '@dicebear/core/lib/core';
import {bottts} from '@dicebear/collection';
import {IListProps} from '../types';
import {IPost} from '../types';

type Props = {
  Controls: (props: IListProps) => React.ReactElement;
} & IListProps;

export default function List(props: Props) {
  return (
    <FlatList
      data={props.data}
      ListHeaderComponent={<props.Controls {...props} />}
      renderItem={({item}: {item: any}) => {
        item.avatar = createAvatar(bottts, {
          seed: item.id,
        }).toString();

        return (
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <SvgXml xml={item.avatar} style={{width: 50, height: 50}} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Id: </Text>
                <Text>{item.id}</Text>
              </View>
              {/* <View style={styles.textSection}>
                <Text style={styles.textLabel}>Language: </Text>
                <Text>{item.language}</Text>
              </View> */}
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>User ID: </Text>
                <Text>{item.user_id}</Text>
              </View>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Is Answered?: </Text>
                <Text>{item.is_answered.toString()}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Title: </Text>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.textSection}>
                <Text style={styles.textLabel}>Tags: </Text>
                <Text>{item.tags}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
