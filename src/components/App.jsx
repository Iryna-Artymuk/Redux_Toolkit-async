import { Layout } from 'components/Layout/Layout';
import { HeaderBar } from './HeaderBar/HeaderBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getTodos } from 'redux/operations';
import { fetchToDo } from 'redux/operationsWithThunk';

import { getTasks, getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // при загрузкі сорінки нам треба зробити запит на  бекенл і отримати список завдань щоб рендирити сторінку
  // методом dispatch віжправляєм фнекцію яка спочатку

  useEffect(() => {
    //  викликаєм   dispatch(getTodos()) при загрузці сторінки ( монтуванні компонкнта App)
    // і так як  результаом  виклику  getTodos() є інша функція яка очікує  dispatch як параметр він туди передається автоматично
    // або можна підставти    dispatch(getTodos( dispatch));
    // і виконуються функція з файлу operations.js яка робить
    //   робиться асинхронний запит на бекенд щоб отримати список завданні і передати payload який reducer запише в state
    // також відправляє  всі інші  екшени

    dispatch(fetchToDo(5));
  }, [dispatch]);
  return (
    <Layout>
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
      </div>
      <HeaderBar />
      <TaskForm />
      {tasks && <TaskList />}
    </Layout>
  );
};
