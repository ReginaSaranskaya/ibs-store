import React from "react";
import { Box } from "@mui/material";
import {
  styleBoxImage,
  styleContainerImage,
  styleImage,
} from "@/components/ProductImage/styles";

interface IProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<IProps> = ({ src, alt }) => {
  return (
    <Box sx={styleContainerImage}>
      <Box sx={styleBoxImage}>
        <Box component="img" sx={styleImage} src={src} alt={alt} />
      </Box>
    </Box>
  );
};

export default ProductImage;
