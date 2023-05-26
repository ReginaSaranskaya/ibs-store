import React, { useEffect, useState } from "react";

import { getItem } from "../../api";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import styles from "./style.module.scss";

const Product = () => {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    getItem().then((product) => setProductInfo(product));
  });

  return (
    productInfo && (
      <div className={styles.Product}>
        <ProductImage
          src={productInfo.picture.path}
          alt={productInfo.picture.alt}
        />
        <ProductInfo
          name={productInfo.name}
          description={productInfo.description}
          details={productInfo.details}
          price={productInfo.price.value}
          like={productInfo.like}
        />
      </div>
    )
  );
};

export default Product;
