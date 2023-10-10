import React, { useState } from "react";
import styles from "./Window.module.scss";
import { Link } from "react-router-dom";

function Window() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Pro1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illum!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illum!",
    },
    {
      id: 2,
      title: "Pro1",
      description: "Empty project",
    },
    {
      id: 3,
      title: "Pro1",
      description: "Empty project",
    },
    {
      id: 4,
      title: "Pro1",
      description: "Empty project",
    },
    {
      id: 5,
      title: "Pro1",
      description: "Empty project",
    },
    {
      id: 6,
      title: "Pro1",
      description: "Empty project",
    },
    {
      id: 7,
      title: "Pro1",
      description: "Empty project",
    },
  ]);

  const createProject = () => {
    setProjects((prev) => [...prev, { id: projects.length, title: "new pro", description: "hghsd jhsdf jshdgf" }]);
  };

  return (
    <>
      <div className={styles.container}>
        {projects.map((project) => {
          return (
            <Link
              className={styles.card}
              to={`/projects/${project.id}`}>
              <h3 className={styles.card__title}>{project.title}</h3>
              <p className={styles.card__description}>{project.description}</p>
            </Link>
          );
        })}
        <button
          className={styles.create}
          title="Create project"
          onClick={() => createProject()}>
          +
        </button>
      </div>
    </>
  );
}

export default Window;
