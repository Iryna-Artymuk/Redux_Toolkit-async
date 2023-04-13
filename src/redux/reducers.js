import { allFilters } from '../redux/constants';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  sortAtoZ,
  sortZtoA,
  setStatusFilter,
} from './actions';

const initialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
//  використовує бібліотеку Immer
// можна писати код наче ми змінюєм state immer створить копію стейту за нас
export const tasksReducer = createReducer(initialState, {
  [addTask]: (state, action) => {
    // return [...state, action.payload];

    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // return state.filter(task => task.id !== action.payload);
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    // return state.map(task => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return {
    //     ...task,
    //     completed: !task.completed,
    //   };
    // });

    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
  [sortAtoZ]: (state, action) => {
    // const sortState = [...state].sort(function (task1, task2) {
    //   return task1.text.localeCompare(task2.text);
    // });
    state.sort(function (task1, task2) {
      return task1.text.localeCompare(task2.text);
    });
  },
  [sortZtoA]: (state, action) => {
    // const sortState = [...state].sort(function (task1, task2) {
    //   return task2.text.localeCompare(task1.text);
    // });

    // return sortState;

    state.sort(function (task1, task2) {
      return task2.text.localeCompare(task1.text);
    });
  },
});

const filtersInitialState = {
  status: allFilters.all,
};

//в папці action описуєм дії які може обробляти це редюсер
// по кліку кнопки через dispatch відпрвляєм action і передаєм  в payload назву кнопки на яку клікнули
// в редюсері в аргументах приймаєм sate i action презаписуєм state на значення яке прийшло з action.payload
export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});
