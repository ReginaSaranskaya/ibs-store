import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Counter from "@/ui-components/Counter/Counter";
import Like from "@/ui-components/Like/Like";
import {
  styleButton,
  styleDescription,
  styleInfoBox,
  styleTitle,
} from "@/components/ProductInfo/styles";

export interface IProps {
  name: string;
  like: boolean;
  description: string;
  price: number;
  details: string;
}

const ProductInfo: React.FC<IProps> = ({
  name,
  like,
  description,
  price,
  details,
}) => {
  return (
    <Box sx={styleInfoBox}>
      <Typography sx={styleTitle} component="h1" variant="h1">
        {name}
      </Typography>
      <Typography sx={styleDescription} component="p" variant="body1">
        {description}
      </Typography>
      <Typography sx={styleTitle} component="h2" variant="h2">
        Details
      </Typography>
      <Typography sx={styleDescription} component="p" variant="body1">
        {details}
      </Typography>
      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent={{ xs: "space-between" }}
        spacing={{ xs: 0, md: 2 }}
      >
        <Typography
          order={1}
          variant="caption"
          color="secondary.main"
          component="div"
        >
          &#36; {price}
        </Typography>
        <Counter />
        <Button variant="contained" sx={styleButton}>
          Add to cart
        </Button>
        <Like like={like} />
      </Stack>
    </Box>
  );
};

export default ProductInfo;
