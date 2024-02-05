import { StyleSheet, Text, View, FlatList } from 'react-native';

// Import local files
import TodoItem from './TodoItem';
import { selectQuery } from '../redux/todoSlice/todoSlice';
import { useAppSelector } from '../hooks/hooks';

// Import types
import { ITodo } from '../types';

const TodoList = ({ todos }: { todos: ITodo[] }) => {
  const query = useAppSelector(selectQuery);
  const renderTodos = ({ item }: { item: ITodo }) => {
    return <TodoItem item={item} />;
  };

  todos = todos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      {todos.length > 0 ? (
        <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={renderTodos} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>There is no todo lists.</Text>
        </View>
      )}
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
