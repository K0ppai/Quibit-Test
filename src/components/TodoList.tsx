import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';
import { selectTodos } from '../redux/todoSlice/todoSlice';
import { useAppSelector } from '../hooks/hooks';

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <FlatList
      style={styles.listContainer}
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <TodoItem item={item} />;
      }}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 2,
  },
});
