import React from "react";
import clsx from "clsx";
import styles from "./ApprenticeCard.module.css";

const ApprenticeCard = ({ name, roles, site, twitter }) => {
  return (
    <div className={styles.apprenticeBox}>
      <h3 className={styles.apprenticeName}>Name</h3>
      <p>Warrior, Paladin</p>
      <p>Scribe, Healer</p>
    </div>
  );
};

export default ApprenticeCard;
