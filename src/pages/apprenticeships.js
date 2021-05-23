import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Header from "../components/Header";

function ApprenticePageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>Apprenticeships</p>
      </div>
    </header>
  );
}

export default function ApprenticeshipPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Raid Guild ${siteConfig.title} Apprenticeships`}
      description='Raid Guild apprenticeships in Season 1'
    >
      <Header title={siteConfig.title} tagline='Apprenticeships'></Header>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae
        provident reiciendis expedita est suscipit illum culpa labore quae.
        Tempore dolorem nam architecto obcaecati doloremque! Natus amet dolor
        aperiam facere?
      </main>
    </Layout>
  );
}
