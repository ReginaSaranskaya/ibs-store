import React from "react";

import styles from "./style.module.scss";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.ProductImage}>
      <div className={styles.ProductImage__container}>
        <img className={styles.ProductImage__image} src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ProductImage;
