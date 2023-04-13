// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducers';

// // const rootReducer = (state = {}, action) => {
// //   return {
// //     tasks: tasksReducer(state.tasks, action),
// //     filters: filtersReducer(state.filters, action),
// //   };
// // };
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// // console.log(store.getState());

// import { rootReducer } from './reducer';
// нам більше не потрібен rootReducer він створюється автоматично з допомогою configureStore
// для нього імпортуєм кусочки редюсери які відповідають за свою частину стору
import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer } from '../redux/reducers';
// import { filtersReducer } from '../redux/reducers';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
