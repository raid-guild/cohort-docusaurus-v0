import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./ApprenticeGrid.module.css";
import ApprenticeCard from "./ApprenticeCard";

const ApprenticeGrid = ({ apprenticeData }) => {
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
