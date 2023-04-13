import { nanoid } from 'nanoid';
//Екшени - це об'єкти, які передають дані з компонентів у стор,
//тим самим сигналізуючи про те, яка подія сталася в інтерфейсі.
//Вони являються єдиним джерелом інформації для стору.

// const action = {
//   type: "Action type",
//   payload: "Payload value",
// };

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       text: text,
//       completed: false,
//     },
//     //  в цьому випадку  payload це обєкт одного завдання з осією інформацією
//   };
// };
// export const deleteTask = TaskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: TaskId,
//   };
// };
// export const toggleCompleted = TaskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: TaskId,
//   };
// };

// export const sortAtoZ = () => {
//   return {
//     type: 'tasks/sortAtoZ',
//   };
// };
// export const sortZtoA = () => {
//   return {
//     type: 'tasks/sortZtoA',
//   };
// };
// export const setStatusFilter = filterValue => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: filterValue,
//   };
// };

import { createAction } from '@reduxjs/toolkit';

// createAction  сама створює action і в значення типу запише те шо передали підчвс виклику
// а в payload запишеться те значення яке буде передане під час вдправки Action по кліку на кнопку чи інша дія користувача
// в payload автоматично запишеться рядок чи число якщо треба передати щось інше треба в createAction передати функцію prepareAction
// як у випадку з формою коли треба ствооювати обєкт завдання
export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const setStatusFilter = createAction('filters/setStatusFilter');
export const sortAtoZ = createAction('tasks/sortAtoZ');
export const sortZtoA = createAction('tasks/sortZtoA');
