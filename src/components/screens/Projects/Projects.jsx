import React, { useState } from "react";
import styles from "./Projects.module.scss";
import Card from "../../generic/Card";
import ActionButton from "../../generic/ActionButton";
import add from "../../icons/add.svg";

function Projects() {
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
    setProjects((prev) => [...prev, { id: projects.length + 1, title: "new pro", description: "hghsd jhsdf jshdgf" }]);
  };

  return (
    <>
      <div className={styles.container}>
        {projects.map((project) => (
          <Card
            key={project.id}
            className={styles.card}
            to={`/projects/${project.id}`}>
            <h3 className={styles.card__title}>{project.title}</h3>
            <p className={styles.card__description}>{project.description}</p>
          </Card>
        ))}
        <ActionButton
          onClick={createProject}
          img={add}
        />
      </div>
    </>
  );
}

export default Projects;
