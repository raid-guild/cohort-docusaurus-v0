import React from "react";
import clsx from "clsx";
import styles from "./Badge.module.css";

const Badge = ({ name, role }) => (
  <span
    className={
      role === "technical" ? styles.techRoleBadge : styles.nonTechRoleBadge
    }
  >
    {name}
  </span>
);

export default Badge;
