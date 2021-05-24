import React from "react";
import Layout from "@theme/Layout";
import ApprenticeCard from "../../components/ApprenticeCard";

function Apprentices() {
  return (
    <Layout title='Apprentices'>
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
          Edit <code>pages/apprentices/index.js</code> and save to reload.
        </p>
        <ApprenticeCard />
      </div>
    </Layout>
  );
}

export default Apprentices;
