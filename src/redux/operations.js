import axios from 'axios';
axios.defaults.baseURL = 'https://6437cea9894c9029e8c68179.mockapi.io/myToDo';

// const fetchTasks = () => async dispatch => {
//   try {
//     const response = await axios.get("/myToDo");
//   } catch (e) {}
// };

export const getTodos = async () => {
  try {
    const response = await axios.get('alltoDo');
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

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
