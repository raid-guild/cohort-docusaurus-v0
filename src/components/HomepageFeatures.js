import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { ArmorHelmet, Crown, Wand } from "./RaidIcons";

const FeatureList = [
  {
    title: "Who We Are",
    // Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    icon: "ArmorHelmet",
    description: (
      <>
        <span className={styles.calloutQuote}>
          "If you want to go far, go together."
        </span>
        <br />
        The brave and true apprentices of Season 1 who aspire to slay web3
        product demons. We've embarked on our journey to learn the ways of the
        DAO.
      </>
    ),
  },
  {
    title: "What We Bring",
    // Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    icon: "Crown",
    description: (
      <>
        <span className={styles.calloutQuote}>
          "Our skill and knowledge is ready for trial."
        </span>
        <br />
        Armed with our unique experiences and perspectives, we are forming
        squads. We're learning each other's strengths and have banded together
        to work through quests to test our mettle.
      </>
    ),
  },
  {
    title: "Our Story",
    // Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    icon: "Wand",
    description: (
      <>
        <span className={styles.calloutQuote}>"Stay awhile, and listen."</span>
        <br /> Our story has yet to be written. The tales of the product demons
        that we slay will be written in due time.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        {icon === "ArmorHelmet" ? (
          <ArmorHelmet color='var(--ifm-color-primary)' />
        ) : null}
        {icon === "Crown" ? <Crown color='var(--ifm-color-primary)' /> : null}
        {icon === "Wand" ? <Wand color='var(--ifm-color-primary)' /> : null}
      </div>
      <div className='text--center padding-horiz--md'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
