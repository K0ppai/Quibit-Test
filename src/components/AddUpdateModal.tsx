import { StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

// Import local files
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  changeTodo,
  selectModalType,
  selectTodo,
  selectVisibility,
} from '../redux/todoSlice/todoSlice';
import ModalButtons from './ModalButtons';

const AddUpdateModal = () => {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const modalType = useAppSelector(selectModalType);
  const visible = useAppSelector(selectVisibility);
  const todo = useAppSelector(selectTodo);

  useEffect(() => {
    todo.title && todo.description ? setDisabled(false) : setDisabled(true);
  }, [todo.title, todo.description]);

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.header}>
            {modalType === 'update' ? 'Update Todo List' : 'Add Todo List'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Please enter todo list title'
            value={todo.title}
            onChangeText={(val) => dispatch(changeTodo({ key: 'title', val }))}
          />
          <TextInput
            style={styles.input}
            placeholder='Please enter description'
            value={todo.description}
            onChangeText={(val) => dispatch(changeTodo({ key: 'description', val }))}
          />
          <ModalButtons modalType={modalType} disabled={disabled} />
        </View>
      </View>
    </Modal>
  );
};

export default AddUpdateModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: 250,
    rowGap: 20,
  },
  header: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
});
