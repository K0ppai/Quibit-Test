import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IInitialState, ITodo, ITodoState } from '../../types';

const defaultTodo: ITodo = {
  title: '',
  description: '',
  id: Math.random().toString(),
  completed: false,
};

const initialState: IInitialState = {
  todos: [],
  todo: defaultTodo,
  modalType: '',
  targetTodoId: '',
  query: '',
  isVisible: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addOne: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    updateOne: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === state.targetTodoId
          ? { ...todo, title: payload.title, description: payload.description }
          : todo,
      );
    },

    deleteOne: (state, { payload }) => {
      state.todos = [...state.todos.filter((todo) => todo.id !== payload)];
    },

    updateTodoStatus: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },

    deleteAllCompleted: (state) => {
      const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
      const completedTodos = state.todos.filter((todo) => todo.completed);
      if (completedTodos.length === 0) {
        Alert.alert('Message', 'Please select the todo lists you want to delete.');
      }
      state.todos = [...uncompletedTodos];
    },

    changeTodo: (state, { payload }: { payload: { key: string; val: string } }) => {
      const { key, val } = payload;
      state.todo = {
        ...state.todo,
        [key]: val,
      };
    },

    changeModalType: (state, { payload }) => {
      state.modalType = payload;
    },

    setTodo: (state, { payload }) => {
      state.todo = { ...payload };
    },

    setTargetId: (state, { payload }) => {
      state.targetTodoId = payload;
    },

    setQuery: (state, { payload }) => {
      state.query = payload;
    },

    setModalVisibility: (state, { payload }) => {
      state.isVisible = payload;
    },
  },
});

export const {
  addOne,
  updateTodoStatus,
  deleteAllCompleted,
  changeModalType,
  deleteOne,
  setTargetId,
  updateOne,
  setQuery,
  setModalVisibility,
  changeTodo,
  setTodo,
} = todoSlice.actions;

export const selectTodos = (state: ITodoState) => state.todo.todos;
export const selectModalType = (state: ITodoState) => state.todo.modalType;
export const selectQuery = (state: ITodoState) => state.todo.query;
export const selectVisibility = (state: ITodoState) => state.todo.isVisible;
export const selectTodo = (state: ITodoState) => state.todo.todo;

export default todoSlice.reducer;
