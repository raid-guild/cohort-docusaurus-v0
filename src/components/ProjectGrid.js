import React, { useEffect } from "react";
import styles from "./ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projectData }) => {
  return (
    <div className={styles.projectGrid}>
      {projectData &&
        projectData.map((project, idx) => (
          <ProjectCard key={`${project.name}${idx}`} name={project.name} />
        ))}
    </div>
  );
};

export default ProjectGrid;
