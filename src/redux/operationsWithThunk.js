//Redux Toolkit спрощує процес оголошення асинхронного генератора екшену за допомогою функції createAsyncThunk().
//Першим аргументом вона приймає тип екшену,
//а другим функцію, яка повинна виконати HTTP-запит і повернути проміс із даними, які стануть значенням payload.
//Вона повертає асинхронний генератор екшену (операцію) при запуску якого виконається функція з кодом запиту.

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6437cea9894c9029e8c68179.mockapi.io/home';

export const fetchToDo = createAsyncThunk(
  'tasks/fetchAllToDo',
  async (a, thunkAPI) => {
    console.log(a);
    try {
      const response = await axios.get('alltoDo');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      //thunkAPI  це обєкт в якому є різні методи для роботи з createAsyncThunk
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Колбек функція, ( 12 рядок )в якій виконується запит, називається payloadCreator
//і відповідає за складання значення властивості payload.
// Вона буде викликана з двома аргументами: arg та thunkAPI.

// payloadCreator(arg, thunkAPI)

// arg - значення, яке було передано операції під час виклику.
// Використовується, наприклад, для передачі ідентифікаторів об'єктів при видаленні, тексту нотаток при створенні, тощо.
// thunkAPI - об'єкт, який передається в асинхронний генератор екшену в redux-thunk.
// Містить властивості та методи доступу до стору, відправки екшенів, а також деякі додаткові.

// операція додавання завдання
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      // в методі post передаєм в яке місце на бекенді треба додати обєкт
      // другий аргумент передаємо сам обєкт який треба додати
      // цю функцію імпортужм в форму і передмо значення інпуту
      const response = await axios.post('alltoDo', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`alltoDo/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  //коли по кліку на чекбокс відправиться екшен toggleCompleted йому передасться обєкт
  // в якого якщо запит успішний поміняється влвстивість   completed: !task.completed, на бекенді
  // а в редюсері ми обробим цей екшен і поміняєм влвстивість   completed: !task.completed, у стейті
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`alltoDo/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const sortAtoZ =  dispath('tasks/sortAtoZ ')
