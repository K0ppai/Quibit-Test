import { StyleSheet, View } from 'react-native';

// Import local files
import { selectTodos } from '../redux/todoSlice/todoSlice';
import TodoList from '../components/TodoList';
import Modal from '../components/AddUpdateModal';
import { useAppSelector } from '../hooks/hooks';
import SearchBar from '../components/SearchBar';
import AddButton from '../components/AddButton';
import Heading from '../components/Heading';
import DeleteButton from '../components/DeleteButton';

const ListScreen = () => {
  let todos = useAppSelector(selectTodos);

  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        {todos.length > 0 && <Heading todos={todos} />}
        <TodoList todos={todos} />
        <Modal />
      </View>
      <View style={styles.buttonContainer}>
        <AddButton />
        <DeleteButton />
      </View>
    </>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    rowGap: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
