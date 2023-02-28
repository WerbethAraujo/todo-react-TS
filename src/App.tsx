import { useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Modal } from './components/Modal';

import styles from './App.module.css';

import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  function hadleDeleteTask(id: number) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function hideOrShowModal(display: boolean) {
    const modal = document.querySelector('#modal');
    display ? modal!.classList.remove('hide') : modal!.classList.add('hide');
  }
  function handleEditTask(task: ITask): void {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  function handleUpdateTask(id: number, title: string, priority: number) {
    const updatedTask: ITask = {
      id,
      title,
      priority,
    };

    const newsItemsTask = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(newsItemsTask);

    hideOrShowModal(false);
  }

  return (
    <>
      <Modal
        titleModal={'Editar tarefa'}
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
          onEditTask={handleEditTask}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
