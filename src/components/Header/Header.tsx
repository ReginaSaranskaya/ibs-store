import React, { useContext } from "react";
import { IconButton, Stack } from "@mui/material";

import Cart from "@mui/icons-material/ShoppingCartOutlined";
import Account from "@mui/icons-material/AccountCircleOutlined";
import Context from "@/context/Search/context";
import Search from "@/ui-components/Search/Search";

import { styleHeaderBox, styleLink } from "@/components/Header/styles";

const Header: React.FC = () => {
  const context = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.change(e.target.value);
  };

  return (
    <Stack sx={styleHeaderBox} direction="row" component="header">
      <Search handleChange={handleChange} value={context?.value} />
      <Stack direction="row" spacing={2.5}>
        <IconButton sx={styleLink}>
          <Cart />
        </IconButton>
        <IconButton sx={styleLink}>
          <Account />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
