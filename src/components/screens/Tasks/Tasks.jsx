import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Tasks.module.scss";

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
  return (
    <>
      <div className={styles.canban}>
        <div className={styles.canban__column}>
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
        </div>
      </div>
    </>
  );
}

export default Tasks;

// queue
// development
// done
