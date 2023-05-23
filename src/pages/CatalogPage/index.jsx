import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import styles from "../style.module.scss";

class CatalogPage extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default CatalogPage;
