import css from './TaskCounter.module.css';
// Імпортуємо хук
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
export const getStatusFilter = state => state.filters.status;
export const TaskCounter = () => {
  // Один і той же селектор може використовуватися в декількох місцях програми,
  // що призводить до дублювання коду, як, наприклад, у наших компонентах TaskList, StatusFilter та TaskCounter.
  //Щоб уникнути цього та ще більше структурувати код, всі функції-селектори оголошуються в окремому файлі,
  //наприклад, в src/redux/selectors.js,
  //після чого імпортуються до компонентів.
  const tasks = useSelector(getTasks);
  const tasksCount = tasks.reduce(
    (ititialcount, task) => {
      if (task.completed) {
        ititialcount.completed += 1;
      }
      if (!task.completed) {
        ititialcount.active += 1;
      }
      return ititialcount;
    },
    {
      active: 0,
      completed: 0,
    }
  );

  //   console.log(tasksCount);
  return (
    <div>
      <p className={css.text}> Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
