import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import { Itask } from './interfaces/Task';

function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <TaskForm buttonText='Criar tarefa' />
        <TaskList />
      </main>

      <Footer />
    </>
  );
}

export default App;
