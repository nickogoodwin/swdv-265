import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';

function Input(props: any) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  secureTextEntry: PropTypes.any,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onFocus: PropTypes.func,
};

export default function App(): JSX.Element {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Input
        label="Input Text:"
        onChangeText={e => {
          setText(e);
        }}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setMessage(text);
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
