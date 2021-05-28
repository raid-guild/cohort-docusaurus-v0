import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Header from "../components/Header";
import HomepageFeatures from "../components/HomepageFeatures";
import PageSeo from "../components/PageSeo";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description='The Raid Guild Season 1 Cohort site -- aspiring web3 product demon slayers.'>
      <Header title={siteConfig.title} tagline={siteConfig.tagline}>
        <div className={styles.buttons}>
          <Link
            // className='button button--secondary button--lg'
            className={clsx("button button--lg", styles.buttonRgCTA)}
            to='/docs/intro'
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </Header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
