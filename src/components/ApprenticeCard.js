import React from "react";
import clsx from "clsx";
import styles from "./ApprenticeCard.module.css";

const ApprenticeCard = ({
  name = "An Apprentice",
  techRoles,
  nonTechRoles,
  site,
  twitterHandle,
}) => {
  return (
    <div className={styles.apprenticeBox}>
      <h3 className={styles.apprenticeName}>{name}</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {techRoles
            ? techRoles.map((role, index) => (
                <span className={styles.apprenticeRole}>
                  {role}
                  {index !== techRoles.length - 1 ? "," : ""}
                </span>
              ))
            : null}
        </div>
        <div style={{ display: "flex" }}>
          {nonTechRoles
            ? nonTechRoles.map((role, index) => (
                <span className={styles.apprenticeRole}>
                  {role}
                  {index !== nonTechRoles.length - 1 ? "," : ""}
                </span>
              ))
            : null}
          {twitterHandle ? (
            <a href={`https://twitter.com/${twitterHandle}`}>Twitter</a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ApprenticeCard;
