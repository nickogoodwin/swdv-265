import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface ModalProps {
  message: string;
}

function MyModal(props: ModalProps): JSX.Element {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(false);
    }, 5000);
  }, [modalVisible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>{props.message}</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Close</Text>
          </TouchableOpacity>
          <ActivityIndicator size="small"></ActivityIndicator>
        </View>
      </View>
    </Modal>
  );
}

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <MyModal message="A message of some sort"></MyModal>
    </View>
  );
}
