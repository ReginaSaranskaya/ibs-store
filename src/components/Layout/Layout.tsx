import React from "react";
import { Outlet } from "react-router";

import Header from "../Header/Header";

import styles from "./style.module.scss";

const Layout = () => {
  return (
    <div className={styles.Container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
