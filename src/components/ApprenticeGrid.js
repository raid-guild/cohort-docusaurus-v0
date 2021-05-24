import React from "react";
import clsx from "clsx";
import styles from "./ApprenticeGrid.module.css";
import ApprenticeCard from "./ApprenticeCard";

const ApprenticeGrid = ({ data }) => {
  return (
    <div className={styles.apprenticeGrid}>
      <ApprenticeCard />
      <ApprenticeCard />
      <ApprenticeCard />
    </div>
  );
};

export default ApprenticeGrid;
