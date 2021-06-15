import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Header from '../components/Header';
import HomepageFeatures from '../components/HomepageFeatures';

import { ArmorHelmet, Crown, Wand } from '../components/RaidIcons';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description='The Raid Guild Season 1 Cohort site -- aspiring web3 product demon slayers.'>
      <Header title={siteConfig.title} tagline={siteConfig.tagline}>
        <div>
          <p>
            In the year of 2021 bulls are running. Post-pandemic fever is in the
            air. And ether had just crashed off an ATH. A group of misfits from
            around the globe converged on Discord. Assembled by our fearless
            leaders taekikz and DamagedGoods to pledge Raid Guild. As
            apprentices we came together to learn the ways of the DAO. Little
            did we know the projects we hacked would provide foundation for the
            future. This site documents our journey.
          </p>
        </div>
      </Header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
