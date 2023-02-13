import React from 'react';
import {Modal, View, Text, Pressable} from 'react-native';
import {useAppSelector} from '../hooks/reduxHooks';
import styles from '../../styles';
import Colors from '../theme/Colors';
import type {IPriceIndex} from '../types';
import {decode} from 'html-entities';
import {formatPrice} from '../util/formatters';

interface ModalProps {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: IPriceIndex | undefined;
}

export default function DetailsModal(props: ModalProps): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const toggleVisible = () => props.setModalVisible(!props.visible);

  return (
    <View style={[styles.modalContainer]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={toggleVisible}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDarkMode
                ? Colors.dark.dimmed
                : Colors.light.dimmed,
            },
          ]}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: isDarkMode
                  ? Colors.dark.surface
                  : Colors.light.surface,
              },
            ]}>
            <View style={[styles.detailsTextContainer]}>
              <Text
                style={[
                  styles.detailsHeader,
                  {
                    color: isDarkMode ? Colors.dark.text : Colors.light.text,
                  },
                ]}>
                {props.data?.description} Details
              </Text>
              <Text
                style={[
                  styles.detailsText,
                  {
                    color: isDarkMode ? Colors.dark.text : Colors.light.text,
                  },
                ]}>
                Code:{' '}
                <Text
                  style={[
                    styles.detailsText,
                    {
                      color: isDarkMode ? Colors.dark.coin : Colors.light.coin,
                    },
                  ]}>
                  {props.data?.code}
                </Text>
              </Text>
              <Text
                style={[
                  styles.detailsText,
                  {
                    color: isDarkMode ? Colors.dark.text : Colors.light.text,
                  },
                ]}>
                Symbol:{' '}
                <Text
                  style={[
                    styles.detailsText,
                    {
                      color: isDarkMode ? Colors.dark.coin : Colors.light.coin,
                    },
                  ]}>{`${decode(props.data?.symbol)}`}</Text>
              </Text>
              <Text
                style={[
                  styles.detailsText,
                  {
                    color: isDarkMode ? Colors.dark.text : Colors.light.text,
                  },
                ]}>
                Description:{' '}
                <Text
                  style={[
                    styles.detailsText,
                    {
                      color: isDarkMode ? Colors.dark.coin : Colors.light.coin,
                    },
                  ]}>
                  {props.data?.description}
                </Text>
              </Text>
              <Text
                style={[
                  styles.detailsText,
                  {
                    color: isDarkMode ? Colors.dark.text : Colors.light.text,
                  },
                ]}>
                Rate {'(1 btc)'}:{' '}
                <Text
                  style={[
                    styles.detailsText,
                    {
                      color: isDarkMode
                        ? Colors.dark.price
                        : Colors.light.price,
                    },
                  ]}>
                  {`${formatPrice(props.data?.rate_float, props.data?.code)}`}
                </Text>
              </Text>
            </View>
            <View style={[styles.detailsButtonContainer]}>
              <Pressable
                onPress={toggleVisible}
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
                    elevation: pressed ? 0 : 5,
                    alignSelf: 'flex-end',
                  },
                ]}>
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: isDarkMode ? Colors.light.text : Colors.dark.text,
                    },
                  ]}>
                  Close
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
