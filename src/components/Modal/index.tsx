import React from 'react';
import styles from './Modal.module.css';

import { ITask } from '../../interfaces/Task';

interface Props {
  children: React.ReactNode;
  titleModal: string;
}

export function Modal({ children, titleModal }: Props) {
  function handleCloseModal(e: React.MouseEvent): void {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  }
  return (
    <div className='modal hide' id='modal'>
      <div className={styles.fade} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <i className='bi bi-x' onClick={handleCloseModal}></i>
        <h2>{titleModal}</h2>
        {children}
      </div>
    </div>
  );
}
