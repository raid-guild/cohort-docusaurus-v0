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
  teamRoles = [{ member: "Raider", mainProjectRole: "Apprentice" }],
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
          <p style={{ fontSize: "20px", margin: "0 0" }}>{description}</p>

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
          <>
            {teamRoles
              ? teamRoles.map((team, index) => (
                  <div style={{ display: "flex", alignContent: "center" }}>
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
          </>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
