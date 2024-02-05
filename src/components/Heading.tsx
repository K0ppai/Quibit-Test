import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Import types
import { ITodo } from '../types';

const Heading = ({ todos }: { todos: ITodo[] }) => {
  const uncompletedTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <View>
      <Text style={styles.text}>
        {uncompletedTodos} {uncompletedTodos > 1 ? 'tasks' : 'task'} left to complete
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
