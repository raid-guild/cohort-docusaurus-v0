import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./ApprenticeGrid.module.css";
import ApprenticeCard from "./ApprenticeCard";

const ApprenticeGrid = () => {
  const apprenticeData = [
    {
      name: "jonathan_p",
      techRoles: ["Warrior", "Paladin"],
      nonTechRoles: ["Scribe", "Healer"],
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric, Monk"],
    },
  ];

  return (
    <div className={styles.apprenticeGrid}>
      {apprenticeData &&
        apprenticeData.map((apprentice) => (
          <ApprenticeCard
            name={apprentice.name}
            techRoles={apprentice.techRoles}
            nonTechRoles={apprentice.nonTechRoles}
          />
        ))}
    </div>
  );
};

export default ApprenticeGrid;
