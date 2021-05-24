import React from "react";
import clsx from "clsx";
import styles from "./ApprenticeCard.module.css";

const ApprenticeCard = ({ name, site, twitter }) => {
  const techRoles = ["Warrior", "Paladin"];
  const nonTechRoles = ["Scribe", "Healer"];
  return (
    <div className={styles.apprenticeBox}>
      <h3 className={styles.apprenticeName}>Name</h3>
      <div style={{ display: "flex" }}>
        {techRoles
          ? techRoles.map((role) => (
              <span className={styles.apprenticeRole}>{role}, </span>
            ))
          : null}
      </div>
    </div>
  );
};

export default ApprenticeCard;
