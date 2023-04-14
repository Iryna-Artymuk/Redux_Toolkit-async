import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
// Імпортуємо об'єкт значень фільтра
// import { allFilters } from '../../redux/constants';

import { selectVisibleTasks } from '../../redux/selectors';

// const filteredTasks = (alltasks, filterValue) => {
//   switch (filterValue) {
//     case 'active':
//       return alltasks.filter(task => !task.completed);
//     case 'completed': {
//       return alltasks.filter(task => task.completed);
//     }
//     default:
//       return alltasks;
//   }
// };

export const TaskList = () => {
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const tasks = useSelector(selectVisibleTasks);
  console.log(tasks);
  // console.log(visibleTasks);
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
