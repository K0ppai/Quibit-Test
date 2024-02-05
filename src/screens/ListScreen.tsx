import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Import local files
import { addTodo, deleteAllCompleted } from '../redux/todoSlice/todoSlice';
import TodoList from '../components/TodoList';

// Import types
import { ITodo } from '../types';
import { useAppDispatch } from '../hooks/hooks';

const ListScreen = () => {
  const defaultTodo: ITodo = { title: '', id: Math.random().toString(), completed: false };
  const [todo, setTodo] = useState<ITodo>(defaultTodo);
  const [disabled, setDisabled] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const handleChangeInput = (title: string) => {
    setTodo((prev) => ({ ...prev, title }));
  };

  useEffect(() => {
    todo.title ? setDisabled(false) : setDisabled(true);
  }, [todo.title]);

  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <TodoList />
      <TextInput
        style={styles.input}
        placeholder='Todo list title'
        value={todo.title}
        onChangeText={(val) => handleChangeInput(val)}
      />
      <Button
        title='Create'
        disabled={disabled}
        onPress={() => {
          dispatch(addTodo(todo));
          setTodo(defaultTodo);
        }}
      />
      <Button title='Clear completed all' onPress={() => dispatch(deleteAllCompleted())} />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    flex: 1,
  },
});
