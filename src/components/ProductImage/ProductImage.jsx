import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

class ProductImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.ProductImage}>
        <div className={styles.ProductImage__container}>
          <img
            className={styles.ProductImage__image}
            src={this.props.src}
            alt={this.props.alt}
          />
        </div>
      </div>
    );
  }
}

ProductImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ProductImage;
