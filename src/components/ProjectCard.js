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
      <ArmorHelmet color='var(--ifm-color-primary)' />

      <h3 className={styles.projectName}>{name}</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
            }}
            src='https://raidguild.org/static/raid__fantasy--tee-technicolor-c6842ca3afdac3ffbde7b9a02bda0ceb.png'
          />

          <p style={{ fontSize: "20px" }}>{description}</p>
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
