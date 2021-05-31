import React from "react";
import clsx from "clsx";
import styles from "./Header.module.css";

const ContentBlock = ({ title, bgColor, textColor, tagline, children }) => {
  return (
    <section className={styles.contentBlock}>
      <div className='container'>{children}</div>
    </section>
  );
};

export default ContentBlock;
