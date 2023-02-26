import { ITask } from '../../interfaces/Task';

import styles from './TaskList.module.css';

interface Props {
  taskList: ITask[];
}

export function TaskList({ taskList }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task_container}>
            <div className={styles.task_details}>
              <strong>{task.title}</strong>
              <span>Prioridade: {task.priority}</span>
            </div>
            <div className={styles.task_actions}>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <span>Não há tarefas cadastradas</span>
      )}
    </>
  );
}
