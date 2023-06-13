import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Stack } from "@mui/material";

import ProductInfo from "@/components/ProductInfo/ProductInfo";
import { useAppDispatch, useAppSelector } from "@/state/hooks/hooks";

import { styleProduct } from "@/pages/Product/styles";
import ProductImage from "@/components/ProductImage/ProductImage";
import { fetchItem } from "@/state/productSlice/productActions";
import { IItem } from "@/api/types";

const Product: React.FC = () => {
  const productInfo = useAppSelector(
    (state): IItem | null => state.product?.item
  );
  const dispatch = useAppDispatch();
  const params = useParams();
  const prodId = params.id;

  useEffect(() => {
    if (prodId) {
      dispatch(fetchItem(prodId));
    }
  }, [dispatch, prodId]);

  return (
    productInfo && (
      <Stack
        sx={styleProduct}
        spacing={2}
        direction={{ xs: "column", md: "row" }}
      >
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
      </Stack>
    )
  );
};

export default Product;
