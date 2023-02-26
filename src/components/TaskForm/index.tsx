import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import styles from './TaskForm.module.css';

import { Itask } from '../../interfaces/Task';

interface Props {
  buttonText: string;
}

export function TaskForm({ buttonText }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  function handleAddTask() {}

  function handleChandeInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'titleTask') {
      console.log(e.target.name);
      setTitle(e.target.value);
    } else {
      setPriority(parseInt(e.target.value));
    }

    console.log(title, priority, e);
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
          />
        </div>
        <div className={styles.form_box}>
          <label htmlFor='priority'>Prioridade:</label>
          <input
            type='text'
            name='priority'
            placeholder='Prioridade da tarefa'
            onChange={handleChandeInput}
          />
        </div>
        <input type='submit' value={buttonText} />
      </form>
    </div>
  );
}
