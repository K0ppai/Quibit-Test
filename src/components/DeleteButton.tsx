import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { deleteAllCompleted } from '../redux/todoSlice/todoSlice';
import { MaterialIcons } from '@expo/vector-icons';

const DeleteButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Pressable style={styles.pressable} onPress={() => dispatch(deleteAllCompleted())}>
      <MaterialIcons name='delete' size={30} color='white' />
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'red',
    width: '50%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
