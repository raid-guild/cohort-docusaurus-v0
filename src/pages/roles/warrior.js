import React from "react";
import Layout from "@theme/Layout";

function RoleWarrior() {
  return (
    <Layout title='Warrior'>
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
          All about the Warrior. Maybe this should link to a Markdown page
          instead inside Docs?
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

export default RoleWarrior;
