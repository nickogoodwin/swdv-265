import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import {useAppSelector} from '../hooks/reduxHooks';
import Colors from '../theme/Colors';

function Coin(): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.dark.ground
            : Colors.light.ground,
        },
      ]}>
      <View style={styles.logoContainer}>
        <Icon
          name="bitcoin"
          size={100}
          color={isDarkMode ? Colors.dark.coin : Colors.light.coin}></Icon>
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.dark.surface
              : Colors.light.surface,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: isDarkMode ? Colors.dark.text : Colors.light.text,
            },
          ]}>
          <Text
            style={{
              fontWeight: 'bold',
              color: isDarkMode ? Colors.dark.coin : Colors.light.coin,
            }}>
            Bitcoin
          </Text>{' '}
          is a protocol which implements a highly available, public, and
          decentralized ledger. In order to update the ledger, a user must prove
          they control an entry in the ledger. The protocol specifies that the
          entry indicates an amount of a token, bitcoin with a minuscule b. The
          user can update the ledger, assigning some of their bitcoin to another
          entry in the ledger. Because the token has characteristics of money,
          it can be thought of as a digital currency.
        </Text>

        <Text
          style={[
            styles.text,
            {
              color: isDarkMode ? Colors.dark.text : Colors.light.text,
            },
          ]}>
          Transactions are verified by network nodes through cryptography and
          recorded in a public distributed ledger called a blockchain. The
          cryptocurrency was invented in 2008 by an unknown person or group of
          people using the name Satoshi Nakamoto. The currency began use in
          2009, when its implementation was released as open-source software.
          The word "bitcoin" was defined in a white paper published on October
          31, 2008. It is a compound of the words bit and coin.
        </Text>
      </View>
    </View>
  );
}

export default Coin;
