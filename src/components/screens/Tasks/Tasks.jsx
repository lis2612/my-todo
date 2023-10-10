import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Tasks.module.scss";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function Tasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      projectId: 1,
      title: "task1",
      description: "this is task for project 1",
      status: "development",
    },
    {
      id: 2,
      projectId: 4,
      title: "task2",
      description: "this is task for project 1",
      status: "done",
    },
    {
      id: 3,
      projectId: 3,
      title: "task3",
      description: "this is task for project 1",
      status: "queue",
    },
    {
      id: 4,
      projectId: 1,
      title: "task4",
      description: "this is task for project 1",
      status: "development",
    },
    {
      id: 5,
      projectId: 1,
      title: "task5",
      description: "this is task for project 1",
      status: "done",
    },
    {
      id: 6,
      projectId: 1,
      title: "task6",
      description: "this is task for project 1",
      status: "queue",
    },
    {
      id: 7,
      projectId: 1,
      title: "task7",
      description: "this is task for project 1",
      status: "queue",
    },
  ]);

  const statusList = ["queue", "development", "done"];

  function DroppableColumn(props) {
    const { setNodeRef } = useDroppable({
      id: props.id,
    });
    return (
      <div
        ref={setNodeRef}
        className={styles.canban__column}
      id={props.id}>
        <h2 className={styles.canban__columnTitle}>{props.id}</h2>
        {props.children}
      </div>
    );
  }

  function DraggableCard(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: props.task.id,
    });
    const style = transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          scale: "1.1",
        }
      : undefined;

    return (
      <div
        className={styles.card}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}>
        <h2 className={styles.card__title}>{props.task.title}</h2>
        <p>{props.task.description}</p>
      </div>
    );
  }

  const changeStatus = (id, status) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    const changedTask = tasks.filter((task) => task.id === id)[0];
    changedTask.status = status;
    setTasks([...newTasks, changedTask]);
  };

  return (
    <>
      <div className={styles.canban}>
        <DndContext onDragEnd={(e) => changeStatus(e.active.id, e.over.id)}>
          {statusList.map((status) => (
            <DroppableColumn id={status} key={status}>
              {tasks
                .filter((task) => task.projectId === +id)
                .filter((task) => task.status === status)
                .map((task) => {
                  return (
                    <DraggableCard
                      task={task}
                      key={task.id}
                    />
                  );
                })}
            </DroppableColumn>
          ))}
        </DndContext>

        {/* <div className={styles.canban__column}>
          <h2 className={styles.canban__columnTitle}>Queue</h2>
          {tasks
            .filter((task) => task.projectId === +id)
            .filter((task) => task.status == "queue")
            .map((task) => {
              return (
                <div className={styles.card}>
                  <h2 className={styles.card__title}>{task.title}</h2>
                  <p>{task.description}</p>
                </div>
              );
            })}
        </div>
        <div className={styles.canban__column}>
          <h2 className={styles.canban__columnTitle}>Development</h2>

          {tasks
            .filter((task) => task.projectId === +id)
            .filter((task) => task.status == "development")
            .map((task) => {
              return (
                <div className={styles.card}>
                  <h2 className={styles.card__title}>{task.title}</h2>
                  <p>{task.description}</p>
                </div>
              );
            })}
        </div>
        <div className={styles.canban__column}>
          <h2 className={styles.canban__columnTitle}>Done</h2>

          {tasks
            .filter((task) => task.projectId === +id)
            .filter((task) => task.status == "done")
            .map((task) => {
              return (
                <div className={styles.card}>
                  <h2 className={styles.card__title}>{task.title}</h2>
                  <p>{task.description}</p>
                </div>
              );
            })}
        </div> */}
      </div>
    </>
  );
}

export default Tasks;

// queue
// development
// done
