import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import Like from "@/ui-components/Like/Like";
import {
  styleCard,
  styleContent,
  styleImage,
  styleImageBox,
  styleLikeBox,
  styleName,
} from "@/components/Card/styles";

interface ICardProps {
  id: string;
  name: string;
  alt: string;
  like: boolean;
  price: number;
  picture: string;
}

const CardComponent: React.FC<ICardProps> = ({
  id,
  name,
  alt,
  like,
  price,
  picture,
}) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/product/${id}`)} sx={styleCard}>
      <Box sx={styleLikeBox}>
        <Like like={like} />
      </Box>
      <Box sx={styleImageBox}>
        <CardMedia
          sx={styleImage}
          image={picture}
          component="img"
          title={alt}
        />
      </Box>
      <CardContent sx={styleContent}>
        <Typography variant="h2" sx={styleName}>
          {name}
        </Typography>
        <Typography color="primary.light" variant="body1">
          &#36; {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
