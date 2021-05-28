import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./ApprenticeGrid.module.css";
import ApprenticeCard from "./ApprenticeCard";

const ApprenticeGrid = ({ apprenticeData, sorted }) => {
  const sortedData =
    sorted === "alphabetical"
      ? apprenticeData.sort((apprenticeOne, apprenticeTwo) =>
          apprenticeOne.name > apprenticeTwo.name ? 1 : -1
        )
      : apprenticeData;

  console.log("sorted", sortedData);
  return (
    <div className={styles.apprenticeGrid}>
      {apprenticeData &&
        sortedData.map((apprentice, idx) => (
          <ApprenticeCard
            key={`${apprentice.name}${idx}`}
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
