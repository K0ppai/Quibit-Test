import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Import local files
import { updateTodoStatus } from '../redux/todoSlice/todoSlice';
import { useAppDispatch } from '../hooks/hooks';

// Import types
import { ITodo, ListScreenNavProp } from '../types';

const TodoItem = ({ item }: { item: ITodo }) => {
  const navigation: ListScreenNavProp = useNavigation();
  const dispatch = useAppDispatch();

  const handleNavigation = (todo: ITodo) => {
    navigation.navigate('Details', todo);
  };

  return (
    <View style={styles.todoContainer}>
      <BouncyCheckbox
        isChecked={false}
        fillColor='blue'
        onPress={() => dispatch(updateTodoStatus(item.id))}
      />
      <Pressable onPress={() => handleNavigation(item)}>
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    flex: 1,
  },
  text: {
    color: 'black',
    paddingVertical: 100,
    flex: 1,
  },
});
