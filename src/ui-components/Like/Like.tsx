import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  like: boolean;
}

const Like: React.FC<Props> = ({ like }) => {
  const [checked, setChecked] = useState(like);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Checkbox
      sx={{
        padding: "0",
      }}
      checked={checked}
      onChange={handleChange}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
      icon={<FavoriteIcon sx={{ fill: "#E97F03" }} />}
      checkedIcon={<FavoriteBorderIcon />}
    />
  );
};

export default Like;
