import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

// Import local files
import { useAppDispatch } from '../hooks/hooks';
import { changeModalType, setModalVisibility } from '../redux/todoSlice/todoSlice';
import { colors } from '../utils/colors';

const AddButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        dispatch(changeModalType('add'));
        dispatch(setModalVisibility(true));
      }}
    >
      <Entypo name='add-to-list' size={30} color='white' />
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: colors.button,
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
