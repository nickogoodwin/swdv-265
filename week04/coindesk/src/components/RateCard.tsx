import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles';
import Colors from '../theme/Colors';
import {useAppSelector} from '../hooks/reduxHooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {decode} from 'html-entities';
import DetailsModal from './DetailsModal';
import type {IPriceIndex} from '../types';

interface RateCardProps {
  data: IPriceIndex | undefined;
}

function RateCard(props: RateCardProps): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const [modalVisible, setModalVisible] = useState(false);
  let iconColor = isDarkMode ? Colors.dark.coin : Colors.light.coin;

  let currencyIcon = (code: string | undefined) => {
    switch (code) {
      case 'USD':
        return 'currency-usd';
      case 'EUR':
        return 'currency-eur';
      case 'GBP':
        return 'currency-gbp';
      default:
        return 'help-circle';
    }
  };

  return (
    <>
      <DetailsModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        data={props.data}
      />
      <View
        style={[
          styles.card,
          styles.rateCard,
          {
            backgroundColor: isDarkMode
              ? Colors.dark.surface
              : Colors.light.surface,
          },
        ]}>
        <View style={styles.iconContainer}>
          <Icon
            name={currencyIcon(props.data?.code)}
            color={iconColor}
            size={75}></Icon>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              styles.codeText,
              {
                color: isDarkMode ? Colors.dark.text : Colors.light.text,
              },
            ]}>
            {props.data?.code}
          </Text>
          <Text
            style={[
              styles.text,
              styles.rateText,
              {
                color: isDarkMode ? Colors.dark.price : Colors.light.price,
              },
            ]}>
            {`${decode(props.data?.symbol)}${props.data?.rate?.substring(
              0,
              props.data?.rate.length - 2,
            )}`}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={({pressed}) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? isDarkMode
                    ? Colors.dark.buttonPressed
                    : Colors.light.buttonPressed
                  : isDarkMode
                  ? Colors.dark.button
                  : Colors.light.button,
                elevation: pressed ? 0 : 2,
                shadowOpacity: 20,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: isDarkMode ? Colors.light.text : Colors.dark.text,
                },
              ]}>
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default RateCard;
