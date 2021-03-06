import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ProjectGrid from "../../components/ProjectGrid";
import { projectData } from "../../utils/data";

function Projects() {
  return (
    <Layout
      title='Projects'
      description='Tails of our quests on our journey to be web3 product slayer.'
    >
      <Header
        title='Projects'
        tagline='Tails of our quests on our journey to be web3 product slayers.'
        primary={false}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10vh 5vw",
        }}
      >
        <ProjectGrid projectData={projectData} sorted />
      </div>
    </Layout>
  );
}

export default Projects;
