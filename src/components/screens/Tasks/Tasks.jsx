import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ActionButton from "../../generic/ActionButton";
import add from "../../icons/add.svg";
import Column from "./Column";
import DraggableCard from "./DraggableCard";
import styles from "./Tasks.module.scss";
const { DateTime } = require("luxon");


function Tasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      projectId: 1,
      title: "task1",
      description: "this is task for project 1",
      status: "development",
      created:'1693454546',
      deadline:'1697773654',
      priority:'high',
    },
    {
      id: 2,
      projectId: 4,
      title: "task2",
      description: "this is task for project 1",
      status: "done",
      created:'1693454546',
      deadline:'1697773654',
      priority:'middle',
    },
    {
      id: 3,
      projectId: 3,
      title: "task3",
      description: "this is task for project 1",
      status: "queue",
      created:'1693454546',
      deadline:'1697773654',
      priority:'low',
    },
    {
      id: 4,
      projectId: 1,
      title: "task4",
      description: "this is task for project 1",
      status: "development",
      created:'1693454546',
      deadline:'1697773654',
      priority:'middle',
    },
    {
      id: 5,
      projectId: 1,
      title: "task5",
      description: "this is task for project 1",
      status: "done",
      created:'1693454546',
      deadline:'1697773654',
      priority:'high',
    },
    {
      id: 6,
      projectId: 1,
      title: "task6",
      description: "this is task for project 1",
      status: "queue",
      created:'1693454546',
      deadline:'1697773654',
      priority:'high',
    },
    {
      id: 7,
      projectId: 1,
      title: "task7",
      description: "this is task for project 1",
      status: "queue",
      created:'1693454546',
      deadline:'1697773654',
      priority:'low',
    },
  ]);


  const statusList = ["queue", "development", "done"];

  const changeStatus = (id, status) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    const changedTask = tasks.filter((task) => task.id === id)[0];
    changedTask.status = status;
    setTasks([...newTasks, changedTask]);
  };

  const createTask = () => {
    const newTask = {
      id: tasks.length + 1,
      projectId: 1,
      title: `task ${tasks.length + 1}`,
      description: "new task",
      status: "queue",
      created: DateTime.now().toSeconds(),
      deadline: DateTime.now().plus({days:2}).toSeconds(),
      priority: "high",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <div className={styles.canban}>
        <DndContext onDragEnd={(e) => changeStatus(e.active.id, e.over.id)}>
          {statusList.map((status) => (
            <Column
              id={status}
              key={status}>
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
            </Column>
          ))}

          <ActionButton
            onClick={createTask}
            img={add}
          />
        </DndContext>
      </div>
    </>
  );
}

export default Tasks;

// queue
// development
// done
