import React, {useState, useEffect} from 'react';
import {Modal, View, Text, ActivityIndicator} from 'react-native';
import styles from '../../styles';

interface ModalProps {
  message: string;
  loading: boolean;
}

export default function LoadingModal(props: ModalProps): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal animationType="slide" transparent={true} visible={props.loading}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text>{props.message}</Text>
            <ActivityIndicator
              size="small"
              style={{marginTop: 10}}></ActivityIndicator>
          </View>
        </View>
      </Modal>
    </View>
  );
}
