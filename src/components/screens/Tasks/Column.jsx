import React from 'react'
import styles from './Column.module.scss'
import { useDroppable } from '@dnd-kit/core';

function Column(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  return (
    <div
      ref={setNodeRef}
      className={styles.column}
      id={props.id}>
      <h2 className={styles.column__title}>{props.id}</h2>
      {props.children}
    </div>
  );
}

export default Column
