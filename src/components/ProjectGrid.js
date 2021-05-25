import React, { useEffect } from "react";
import styles from "./ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projectData }) => {
  return (
    <div className={styles.projectGrid}>
      {projectData &&
        projectData.map((project, index) => (
          <ProjectCard
            key={`${project.name}${index}`}
            name={project.name}
            teamRoles={project.teamRoles}
          />
        ))}
    </div>
  );
};

export default ProjectGrid;
