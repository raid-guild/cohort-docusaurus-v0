import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const PageSeo = ({ title, description }) => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Head>
      <title>{siteConfig.title}</title>
      <meta name='og:description' content={siteConfig.description} />
      <meta name='description' content='TESTING THIS OUT' />
    </Head>
  );
};

export default PageSeo;
