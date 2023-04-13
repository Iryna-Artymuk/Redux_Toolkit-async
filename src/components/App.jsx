import { Layout } from 'components/Layout/Layout';
import { HeaderBar } from './HeaderBar/HeaderBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <HeaderBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
