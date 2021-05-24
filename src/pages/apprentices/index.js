import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ApprenticeGrid from "../../components/ApprenticeGrid";

function Apprentices() {
  return (
    <Layout title='Apprentices'>
      <Header
        title='The Apprentices'
        tagline='The brave and true apprentices of Season 1 who aspire to slay web3 demons.'
      />
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
