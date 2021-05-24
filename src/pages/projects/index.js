import React from "react";
import Layout from "@theme/Layout";
import ApprenticeGrid from "../../components/ApprenticeGrid";

function Projects() {
  return (
    <Layout title='Projects'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/projects/index.js</code> and save to reload.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "colunn",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </Layout>
  );
}

export default Projects;
