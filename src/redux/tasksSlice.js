import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: initialState,
    isLoading: false,
    error: null,
  },

  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            // id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask: (state, action) => {
      // return state.filter(task => task.id !== action.payload);
      console.log(state);
      const index = state.tasks.items.findIndex(
        task => task.id === action.payload
      );
      state.splice(index, 1);
    },
    toggleCompleted: (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
    sortAtoZ: (state, action) => {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.sort(function (task1, task2) {
        return task1.text.localeCompare(task2.text);
      });
    },
    sortZtoA: (state, action) => {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.sort(function (task1, task2) {
        return task2.text.localeCompare(task1.text);
      });
    },

    //  fetchingInProgress,fetchingSuccess, fetchingError
    // це actions які будуть згенеровані автоматично actionCreator
    // для кожного типу actions є свій редюсер який змінює шматок стору
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      // console.log(action.payload);
      // state.items = [...state.items, ...action.payload];
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// reducers: {
//   addTask: {
//     reducer(state, action) {
//       state.push(action.payload);
//     },
//     prepare(text) {
//       return {
//         payload: {
//           text,
//           id: nanoid(),
//           completed: false,
//         },
//       };
//     },
//   },
//   deleteTask: (state, action) => {
//     // return state.filter(task => task.id !== action.payload);
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   toggleCompleted: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
//   sortAtoZ: (state, action) => {
//     // const sortState = [...state].sort(function (task1, task2) {
//     //   return task1.text.localeCompare(task2.text);
//     // });
//     state.sort(function (task1, task2) {
//       return task1.text.localeCompare(task2.text);
//     });
//   },
//   sortZtoA: (state, action) => {
//     // const sortState = [...state].sort(function (task1, task2) {
//     //   return task1.text.localeCompare(task2.text);
//     // });
//     state.sort(function (task1, task2) {
//       return task2.text.localeCompare(task1.text);
//     });
//   },
// },
export const { addTask, deleteTask, toggleCompleted, sortAtoZ, sortZtoA } =
  tasksSlice.actions;
export const { fetchingError, fetchingSuccess, fetchingInProgress } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
