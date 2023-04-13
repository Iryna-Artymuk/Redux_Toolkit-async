import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
// Імпортуємо об'єкт значень фільтра
// import { allFilters } from '../../redux/constants';
import { getTasks } from '../../redux/selectors';
import { getStatusFilter } from '../../redux/selectors';

const filteredTasks = (alltasks, filterValue) => {
  switch (filterValue) {
    case 'active':
      return alltasks.filter(task => !task.completed);
    case 'completed': {
      return alltasks.filter(task => task.completed);
    }
    default:
      return alltasks;
  }
};
export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);

  console.log(tasks);
  // Отримуємо значення фільтра із стану Redux
  const filterValue = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = filteredTasks(tasks, filterValue);

  // console.log(visibleTasks);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
