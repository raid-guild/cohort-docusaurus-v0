import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const PageSeo = ({ title, description }) => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Head>
      <meta
        property='og:description'
        content={description ? description : siteConfig.description}
      />
      <meta charSet='utf-8' />
      <title>{title ? title : siteConfig.title}</title>
      <link rel='canonical' href='http://mysite.com/example' />
    </Head>
  );
};

export default PageSeo;
