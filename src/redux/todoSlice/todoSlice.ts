import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, ITodoState } from '../../types';
import { Alert } from 'react-native';

const initialState: IInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      if (payload.title.trim() === '') {
        Alert.alert('Error', 'Title cannot be empty!');
        return;
      }

      state.todos = [...state.todos, payload];
    },

    updateTodoStatus: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },

    deleteAllCompleted: (state) => {
      state.todos = [...state.todos.filter((todo) => !todo.completed)];
    },
  },
});

export const { addTodo, updateTodoStatus, deleteAllCompleted } = todoSlice.actions;

export const selectTodos = (state: ITodoState) => state.todo.todos;

export default todoSlice.reducer;
