import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Header from "../components/Header";
import PageSeo from "../components/PageSeo";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <Header title={siteConfig.title} tagline={siteConfig.tagline}>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
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
