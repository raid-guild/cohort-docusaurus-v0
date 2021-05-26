import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ProjectGrid from "../../components/ProjectGrid";
import { projectData } from "../../utils/data";

function Projects() {
  return (
    <Layout title='Projects'>
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
          margin: "10vh auto",
        }}
      >
        <ProjectGrid projectData={projectData} />
      </div>
    </Layout>
  );
}

export default Projects;
