import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import styles from './TaskForm.module.css';

import { ITask } from '../../interfaces/Task';

interface Props {
  buttonText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskForm({ buttonText, taskList, setTaskList }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, priority };

    setTaskList!([...taskList, newTask]);

    setTitle('');
    setPriority(0);

    console.log(taskList);
  }

  function handleChandeInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'titleTask') {
      setTitle(e.target.value);
    } else {
      setPriority(parseInt(e.target.value));
    }
  }
  return (
    <div>
      <h2>O que voçê vai fazer?</h2>
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
    </div>
  );
}
