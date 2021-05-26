import React from "react";
import Link from "@docusaurus/Link";
import styles from "./ProjectCard.module.css";
import { IconContext } from "react-icons";
import { GiBirdTwitter, GiBroadsword } from "react-icons/gi";
import Badge from "./Badge";
import { ArmorHelmet } from "./RaidIcons";

const ProjectCard = ({
  name,
  description,
  teamRoles = [{ member: "Raider", mainProjectRole: "Apprentice" }],
}) => {
  return (
    <div className={styles.projectBox}>
      <ArmorHelmet color='var(--ifm-color-primary)' />

      <h3 className={styles.projectName}>{name ? name : "A Raid"}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px", margin: "0 0" }}>
            {description
              ? description
              : "A quest to test our mettle as web3 product slayers."}
          </p>

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
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
          }}
        >
          <div>
            {teamRoles
              ? teamRoles.map((team, index) => (
                  <div className={styles.teamRoleBox}>
                    <span
                      className={styles.teamInline}
                      key={`${team.member}:${index}`}
                    >
                      An apprentice mercenary{" "}
                      <span className={styles.teamHighlight}>
                        {team.mainProjectRole}
                      </span>{" "}
                      who is known as {team.member}.
                    </span>
                    <span
                      className={styles.teamInline}
                      key={`${team.member}:${index}`}
                    ></span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
