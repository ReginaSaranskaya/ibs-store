import React from "react";
import { Outlet } from "react-router";

import styles from "./style.module.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className={styles.Container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
