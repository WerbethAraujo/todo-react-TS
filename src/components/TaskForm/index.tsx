import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import styles from './TaskForm.module.css';

import { ITask } from '../../interfaces/Task';

interface Props {
  buttonText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  onUpdateTask?(id: number, title: string, priority: number): void;
}

export function TaskForm({
  buttonText,
  taskList,
  setTaskList,
  task,
  onUpdateTask,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setPriority(task.priority);
    }
  }, [task]);

  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (onUpdateTask) {
      onUpdateTask(id, title, priority);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, priority };

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setPriority(0);
    }

    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  function handleChandeInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'titleTask') {
      setTitle(e.target.value);
    } else {
      setPriority(parseInt(e.target.value));
    }
  }
  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <div className={styles.form_box}>
        <label htmlFor='titleTask'>Título:</label>
        <input
          type='text'
          name='titleTask'
          placeholder='Título da tarefa'
          onChange={handleChandeInput}
          value={title}
        />
      </div>
      <div className={styles.form_box}>
        <label htmlFor='priority'>Prioridade:</label>
        <input
          type='text'
          name='priority'
          placeholder='Prioridade da tarefa'
          onChange={handleChandeInput}
          value={priority || 0}
        />
      </div>
      <input type='submit' value={buttonText} />
    </form>
  );
}
