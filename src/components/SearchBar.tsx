import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import local files
import { useAppDispatch } from '../hooks/hooks';
import { setQuery } from '../redux/todoSlice/todoSlice';
import { colors } from '../utils/colors';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={24} color={colors.darkGray} />
      <TextInput
        style={styles.input}
        placeholder='Search by title'
        onChangeText={(val) => dispatch(setQuery(val))}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    marginTop: 10,
    borderRadius: 999,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: '90%',
    marginLeft: 10,
  },
});
