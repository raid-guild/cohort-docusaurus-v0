import React from "react";
import Link from "@docusaurus/Link";
import styles from "./ProjectCard.module.css";
import { IconContext } from "react-icons";
import { GiBirdTwitter, GiBroadsword } from "react-icons/gi";
import Badge from "./Badge";
import { ArmorHelmet } from "./RaidIcons";

const ProjectCard = ({
  name = "A Project",
  description = "A quest to test our mettle as aspiring web3 product slayers.",
}) => {
  return (
    <div className={styles.projectBox}>
      <h3 className={styles.projectName}>{name}</h3>
      <ArmorHelmet color='var(--ifm-color-primary)' />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <p>{description}</p>
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
        <p>Placeholder</p>
      </div>
    </div>
  );
};

export default ProjectCard;
