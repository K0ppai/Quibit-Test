import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export interface ITodo {
  title: string;
  description: string;
  id: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
  todo: ITodo;
  modalType: string;
  targetTodoId: string;
  query: string;
  isVisible: boolean;
}

export interface ITodoState {
  todo: IInitialState;
}

export type RootStackParamList = {
  TodoLists: undefined;
  Details: ITodo;
};

export type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
export type ListScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'TodoLists'>;
