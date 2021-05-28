import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ApprenticeGrid from "../../components/ApprenticeGrid";
import { apprenticeData } from "../../utils/data";

function Apprentices() {
  return (
    <Layout
      title='Apprentices'
      description='The brave and true apprentices of Raid Guild Season 1 cohort.'
    >
      <Header
        title='The Apprentices'
        tagline='The brave and true apprentices of Season 1 who aspire to slay web3 product demons.'
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
        <ApprenticeGrid apprenticeData={apprenticeData} sorted='alphabetical' />
      </div>
    </Layout>
  );
}

export default Apprentices;
