import { ITask } from '../../interfaces/Task';

import styles from './TaskList.module.css';

interface Props {
  taskList: ITask[];
  onDeleteTask(id: number): void;
  onEditTask(task: ITask | null): void;
}

export function TaskList({ taskList, onDeleteTask, onEditTask }: Props) {
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
              <i className='bi bi-pencil' onClick={() => onEditTask(task)}></i>
              <i
                className='bi bi-trash'
                onClick={() => onDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <span>Não há tarefas cadastradas!</span>
      )}
    </>
  );
}
