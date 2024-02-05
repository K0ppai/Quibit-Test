import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Import types
import { DetailsRouteProp, ITodo } from '../types';

const DetailsScreen = ({ route }: { route: DetailsRouteProp }) => {
  const item: ITodo = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Completed: {item.completed ? 'True' : 'False'}</Text>
      <Text style={styles.text}>Titile: {item.title.toUpperCase()}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    rowGap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
