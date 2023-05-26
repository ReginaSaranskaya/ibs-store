import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.ProductImage}>
      <div className={styles.ProductImage__container}>
        <img className={styles.ProductImage__image} src={src} alt={alt} />
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ProductImage;
