import React from "react";
import Layout from "@theme/Layout";
import ApprenticeGrid from "../../components/ApprenticeGrid";

function Apprentices() {
  return (
    <Layout title='Apprentices'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10vh auto",
        }}
      >
        <ApprenticeGrid />
        {/* <p>
          Edit <code>pages/apprentices/index.js</code> and save to reload.
        </p> */}
      </div>
    </Layout>
  );
}

export default Apprentices;
