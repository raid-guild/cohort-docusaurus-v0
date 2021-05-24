import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ApprenticeGrid from "../../components/ApprenticeGrid";
import { apprenticeData } from "../../utils/apprentices";

function Apprentices() {
  console.log(apprenticeData);
  return (
    <Layout title='Apprentices'>
      <Header
        title='The Apprentices'
        tagline='The brave and true apprentices of Season 1 who aspire to slay web3 product demons.'
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10vh auto",
        }}
      >
        <ApprenticeGrid apprenticeData={apprenticeData} />
        {/* <p>
          Edit <code>pages/apprentices/index.js</code> and save to reload.
        </p> */}
      </div>
    </Layout>
  );
}

export default Apprentices;
