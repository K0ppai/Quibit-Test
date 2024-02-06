import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

// Import local files
import {
  addOne,
  selectTodo,
  setModalVisibility,
  setTodo,
  updateOne,
} from '../redux/todoSlice/todoSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { colors } from '../utils/colors';

// Import types
import { ITodo } from '../types';

const ModalButtons = ({ modalType, disabled }: { modalType: string; disabled: boolean }) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  const defaultTodo: ITodo = {
    title: '',
    description: '',
    id: Math.random().toString(),
    completed: false,
  };

  const handleAddUpdate = (modalType: string) => {
    modalType === 'update' ? dispatch(updateOne(todo)) : dispatch(addOne(todo));
    dispatch(setTodo(defaultTodo));
    dispatch(setModalVisibility(false));
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, disabled ? styles.disabledButton : styles.addButton]}
        onPress={() => handleAddUpdate(modalType)}
        disabled={disabled}
      >
        <Text style={[styles.textStyle, disabled ? styles.disabledText : null]}>
          {`${modalType === 'update' ? 'Update' : 'Add'}`}
        </Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.cancelButton]}
        onPress={() => dispatch(setModalVisibility(false))}
      >
        <Text style={styles.textStyle}>Cancel</Text>
      </Pressable>
    </View>
  );
};

export default ModalButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  disabledButton: {
    backgroundColor: colors.disabled,
  },
  addButton: {
    backgroundColor: colors.button,
  },
  cancelButton: {
    backgroundColor: colors.button,
    marginLeft: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledText: {
    textDecorationLine: 'line-through',
  },
});
