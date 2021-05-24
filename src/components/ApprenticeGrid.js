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
      siteUrl: "https://github.com/jonathanprozzi",
      twitterHandle: "jonathanprozzi",
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric", "Monk"],
      siteUrl: "https://github.com/earth2travis",
      twitterHandle: "earth2travis",
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric", "Monk"],
      siteUrl: "https://github.com/earth2travis",
      twitterHandle: "earth2travis",
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric", "Monk"],
      siteUrl: "https://github.com/earth2travis",
      twitterHandle: "earth2travis",
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric", "Monk"],
      siteUrl: "https://github.com/earth2travis",
      twitterHandle: "earth2travis",
    },
    {
      name: "earth2travis",
      techRoles: [],
      nonTechRoles: ["Cleric", "Monk"],
      siteUrl: "https://github.com/earth2travis",
      twitterHandle: "earth2travis",
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
            siteUrl={apprentice.siteUrl}
            twitterHandle={apprentice.twitterHandle}
          />
        ))}
    </div>
  );
};

export default ApprenticeGrid;
