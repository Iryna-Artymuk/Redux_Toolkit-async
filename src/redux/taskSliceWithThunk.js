import { createSlice } from '@reduxjs/toolkit';
import { fetchToDo } from './operationsWithThunk';
import { addTask, deleteTask, toggleCompleted } from './operationsWithThunk';
const handelPendingstatus = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    sortAtoZ: (state, action) => {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.items.sort(function (task1, task2) {
        return task1.text.localeCompare(task2.text);
      });
    },
  },
  //Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів,
  //тобто тих, які не згенеровані з властивості reducers.
  //Оскільки ці редюсери обробляють «зовнішні» екшени,
  //для них не буде створено генератори екшенів в slice.actions, в цьому немає необхідності.
  extraReducers: {
    [fetchToDo.pending]: handelPendingstatus,
    [fetchToDo.rejected]: handleRejected,
    [addTask.pending]: handelPendingstatus,
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handelPendingstatus,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handelPendingstatus,
    [toggleCompleted.rejected]: handleRejected,

    [fetchToDo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(action.payload);
    },

    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },

    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});
export const tasksReducer = tasksSlice.reducer;
export const { sortAtoZ } = tasksSlice.actions;
// екшен sort буде оброблятись звичайним редюсером і dispatch буде відправляти екшен кастомнй а не згенерований createAsyncThunk
// так як сортуватись буде тільки локальний стейт
// а дані на бекенді будуть не відсортовані
