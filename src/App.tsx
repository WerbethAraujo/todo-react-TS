import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Modal } from './components/Modal';

import styles from './App.module.css';

import { ITask } from './interfaces/Task';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, settaskToUpdate] = useState<ITask | null>(null);

  function hadleDeleteTask(id: number) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function hideOrShowModal(display: boolean) {
    const modal = document.querySelector('#modal');
    display ? modal!.classList.remove('hide') : modal!.classList.add('hide');
  }
  function handelEditTask(task: ITask): void {
    hideOrShowModal(true);
    settaskToUpdate(task);
  }

  function handleUpdateTask(id: number, title: string, priority: number) {
    const updatedTask: ITask = {
      id,
      title,
      priority,
    };

    const newsItemsTask = taskList.map((task, idx) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });
    setTaskList(newsItemsTask);

    hideOrShowModal(false);
  }

  return (
    <>
      <Modal
        children={
          <TaskForm
            buttonText='Editar tarefa'
            taskList={taskList}
            task={taskToUpdate}
            onUpdateTask={handleUpdateTask}
          />
        }
      />
      <Header />

      <main className={styles.main}>
        <h2>O que você vai fazer?</h2>
        <TaskForm
          buttonText='Criar tarefa'
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <h2>Suas tarefas:</h2>
        <TaskList
          taskList={taskList}
          onDeleteTask={hadleDeleteTask}
          onEditTask={handelEditTask}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
