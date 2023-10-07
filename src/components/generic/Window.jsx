import React from "react";
import styles from "./Window.module.scss";
import { Link } from "react-router-dom";

function Window() {
  const projects = [
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
  ];

  return (
    <>
      <div className={styles.window}>
        <h2 className={styles.window__title}>My projects</h2>
        <div className={styles.window__workspace}>
          {projects.map((project) => {
            return (
              <div className={styles.card}>
                <Link
                  className={styles.card__link}
                  to={`/project/${project.id}`}>
                  <h3 className={styles.card__title}>{project.title}</h3>
                </Link>

                <p className={styles.card__description}>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Window;
