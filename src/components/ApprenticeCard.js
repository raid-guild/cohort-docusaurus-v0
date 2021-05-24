import React from "react";
import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./ApprenticeCard.module.css";
import { IconContext } from "react-icons";
import { GiBirdTwitter, GiBroadsword } from "react-icons/gi";
import Badge from "./Badge";
import { CrossedAxes } from "./RaidIcons";

const ApprenticeCard = ({
  name = "An Apprentice",
  techRoles,
  nonTechRoles,
  siteUrl,
  twitterHandle,
  roleLink = false,
}) => {
  return (
    <div className={styles.apprenticeBox}>
      <h3 className={styles.apprenticeName}>{name}</h3>
      <CrossedAxes color='var(--ifm-color-primary)' />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          {techRoles.length !== 0 ? "🧞" : ""}
          {techRoles
            ? techRoles.map((role, index) => (
                <>
                  {/* <Badge name={role} role='technical' /> */}
                  {roleLink === true ? (
                    <Link to={`/roles/${role.toLowerCase()}`}>
                      <span className={styles.apprenticeRole}>
                        {role}
                        {index !== techRoles.length - 1 ? "," : ""}
                      </span>
                    </Link>
                  ) : (
                    <span className={styles.apprenticeRole}>
                      {role}
                      {index !== techRoles.length - 1 ? "," : ""}
                    </span>
                  )}
                </>
              ))
            : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "baseline",
          }}
        >
          {nonTechRoles.length !== 0 ? "🧙🏼" : ""}

          {nonTechRoles
            ? nonTechRoles.map((role, index) => (
                <>
                  {/* <Badge name={role} role='nonTechnical' /> */}
                  <span className={styles.apprenticeRole}>
                    {role}
                    {index !== nonTechRoles.length - 1 ? "," : ""}
                  </span>
                </>
              ))
            : null}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "baseline",
        }}
      >
        <IconContext.Provider
          value={{
            color: "var(--ifm-color-primary-lightest)",
            size: "24px",
          }}
        >
          {siteUrl ? (
            <a href={siteUrl}>
              <GiBroadsword />
            </a>
          ) : null}
          {twitterHandle ? (
            <a href={`https://twitter.com/${twitterHandle}`}>
              <GiBirdTwitter />
            </a>
          ) : null}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ApprenticeCard;
