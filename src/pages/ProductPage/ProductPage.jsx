import React, { Component } from "react";

import styles from "../style.module.scss";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";

class ProductPage extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Header />
        <Product />
      </div>
    );
  }
}

export default ProductPage;
