import React from 'react';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
}

export function Modal({ children }: Props) {
  function handleCloseModal(e: React.MouseEvent): void {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  }
  return (
    <div className='modal hide' id='modal'>
      <div className={styles.fade} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <i className='bi bi-x' onClick={handleCloseModal}></i>
        <h2>Modal</h2>
        {children}
      </div>
    </div>
  );
}
