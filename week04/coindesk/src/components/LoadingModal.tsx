import React from 'react';
import {Modal, View, Text, ActivityIndicator} from 'react-native';
import {useAppSelector} from '../hooks/reduxHooks';
import styles from '../../styles';
import Colors from '../theme/Colors';

interface ModalProps {
  message: string;
  loading: boolean;
}

export default function LoadingModal(props: ModalProps): JSX.Element {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <View
      style={[
        styles.modalContainer,
        {
          backgroundColor: isDarkMode
            ? Colors.dark.ground
            : Colors.light.ground,
        },
      ]}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.container}>
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
              style={{
                color: isDarkMode ? Colors.dark.text : Colors.light.text,
              }}>
              {props.message}
            </Text>
            <ActivityIndicator size="small" style={styles.spinner} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
