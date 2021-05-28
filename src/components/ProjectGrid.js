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
            description={project.description}
            teamRoles={project.teamRoles}
            sponsor={project.sponsor}
          />
        ))}
    </div>
  );
};

export default ProjectGrid;
