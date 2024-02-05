import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
}

export interface ITodoState {
  todo: { todos: ITodo[] };
}

export type RootStackParamList = {
  TodoLists: undefined;
  Details: ITodo;
};

export type DetailsScreenProp = RouteProp<RootStackParamList, 'Details'>;
export type ListScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'TodoLists'>;
