import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductImage from "../../components/ProductImage/ProductImage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import styles from "./style.module.scss";
import { fetchItem } from "../../state/productSlice/productActions";

const Product = () => {
  const productInfo = useSelector((state) => state.product.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);

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
