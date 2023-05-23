import React, { Component } from "react";

import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import styles from "./style.module.scss";
import { getItem } from "../../api/api";

class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getItem().then((product) => this.setState({ product }));
  }

  render() {
    const { product } = this.state;

    if (!product) return null;

    const { picture } = product;

    return (
      <div className={styles.Product}>
        <>
          <ProductImage src={picture.path} alt={picture.alt} />
          <ProductInfo
            name={product.name}
            description={product.description}
            details={product.details}
            price={product.price.value}
            like={product.like}
          />
        </>
      </div>
    );
  }
}

export default Product;
