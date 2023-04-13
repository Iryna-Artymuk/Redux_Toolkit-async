import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { allFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { sortAtoZ, sortZtoA } from '../../redux/tasksSlice';
import { setStatusFilter } from '../../redux/filtersSlice';
// console.log(allFilters);
export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  const handaleAtoZSort = () => dispatch(sortAtoZ());
  const handaleZtoASort = () => dispatch(sortZtoA());

  return (
    // кнопка вибрана якщо значення фільтру в store співпадає з одним з можливих
    // значень фільтру  allFilters  from '../../redux/constants';
    // і до нех через бібліотеку clsx застосовуються стилі вибраної кнопки
    // акуальне значення фільту в store берем через useSelector(getStatusFilter);
    // а змінюєм  значення фільту в store по кліку кнопки
    <div className={css.wrapper}>
      <Button
        selected={filter === allFilters.all}
        onClick={() => handleFilterChange(allFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === allFilters.active}
        onClick={() => handleFilterChange(allFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === allFilters.completed}
        onClick={() => handleFilterChange(allFilters.completed)}
      >
        Completed
      </Button>
      <Button onClick={handaleAtoZSort}>Sort A to Z</Button>
      <Button onClick={handaleZtoASort}>Sort Z to A</Button>
    </div>
  );
};
