import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Import local files
import {
  changeModalType,
  deleteOne,
  setModalVisibility,
  setTargetId,
  updateTodoStatus,
} from '../redux/todoSlice/todoSlice';
import { useAppDispatch } from '../hooks/hooks';
import { colors } from '../utils/colors';

// Import types
import { ITodo, ListScreenNavProp } from '../types';

const TodoItem = ({ item }: { item: ITodo }) => {
  const navigation: ListScreenNavProp = useNavigation();
  const dispatch = useAppDispatch();

  const handleNavigation = (todo: ITodo) => {
    navigation.navigate('Details', todo);
  };

  const handleEdit = () => {
    dispatch(changeModalType('update'));
    dispatch(setTargetId(item.id));
    dispatch(setModalVisibility(true));
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: 'grey' }}
        onPress={() => handleNavigation(item)}
      >
        <View style={styles.boxContainer}>
          <BouncyCheckbox
            isChecked={false}
            fillColor='green'
            style={styles.checkBox}
            onPress={() => dispatch(updateTodoStatus(item.id))}
          />
        </View>
        <Text style={[styles.text, styles.title, item.completed ? styles.completed : null]}>
          {item.title.toUpperCase()}
        </Text>
        <Text style={[styles.text, item.completed ? styles.completed : null]}>
          {item.description}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.editButton]} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.deleteButton]}
            onPress={() => {
              dispatch(deleteOne(item.id));
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.lightGray,
    elevation: 3,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  pressable: {
    flex: 1,
    rowGap: 15,
    padding: 10,
  },
  text: {
    color: 'black',
    paddingVertical: 0,
    fontSize: 16,
  },
  title: { fontWeight: '600' },
  completed: {
    textDecorationLine: 'line-through',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  checkBox: {
    width: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: { borderRadius: 5, padding: 8 },
  editButton: {
    backgroundColor: colors.button,
  },
  deleteButton: {
    backgroundColor: colors.delete,
    marginLeft: 15,
  },
  buttonText: {
    color: 'white',
  },
});
