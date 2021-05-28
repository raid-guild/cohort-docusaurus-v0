import React from "react";
import styles from "./ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projectData, sorted }) => {
  const sortedData =
    sorted === true
      ? projectData.sort((projectOne, projectTwo) =>
          projectOne.name > projectTwo.name ? 1 : -1
        )
      : projectData;

  return (
    <div className={styles.projectGrid}>
      {projectData &&
        sortedData.map((project, index) => (
          <ProjectCard
            key={`${project.name}${index}`}
            name={project.name}
            description={project.description}
            teamRoles={project.teamRoles}
            sponsor={project.sponsor}
          />
        ))}
    </div>
  );
};

export default ProjectGrid;
