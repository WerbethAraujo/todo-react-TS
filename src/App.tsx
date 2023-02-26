import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import { ITask } from './interfaces/Task';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <>
      <Header />

      <main className={styles.main}>
        <TaskForm
          buttonText='Criar tarefa'
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList taskList={taskList} />
      </main>

      <Footer />
    </>
  );
}

export default App;
