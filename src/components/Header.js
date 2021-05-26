import React from "react";
import clsx from "clsx";
import styles from "./Header.module.css";

const Header = ({ title, tagline, children, primary = true }) => {
  return (
    <header
      className={
        primary === true ? styles.heroBannerPrimary : styles.heroBannerSecondary
      }
    >
      <div className='container'>
        <h1 className='hero__title'>{title}</h1>
        <p className='hero__subtitle'>{tagline}</p>
        {children}
      </div>
    </header>
  );
};

export default Header;
