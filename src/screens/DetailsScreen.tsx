import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DetailsScreenProp, ITodo } from '../types';

const DetailsScreen = ({ route }: { route: DetailsScreenProp }) => {
  const item: ITodo = route.params;

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
