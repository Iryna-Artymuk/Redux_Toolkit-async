import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from '../redux/tasksSlice';
axios.defaults.baseURL = 'https://6437cea9894c9029e8c68179.mockapi.io/home';
// getTodos це функція яка при своєму виклику повертає
// іншу функцію яка в якості аргументу  очікує dispatch
//тепер всередині функці ми можем використати dispatch який передали підчас виклику і відпривити actions в
// редюсери для обробки
export const getTodos = () => async dispatch => {
  console.log(dispatch);
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('alltoDo');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
    // console.log(response.data);
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

// export const getTodos = async () => {
//   try {
//     const response = await axios.get('alltoDo');
//     console.log(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export function getTodos() {
//   fetch('https://6437cea9894c9029e8c68179.mockapi.io/myToDo/', {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       // handle error
//     })
//     .then(todos => {
//       console.log(todos);

//       // Do something with the list of tasks
//     })
//     .catch(error => {
//       // handle error
//     });
// }
