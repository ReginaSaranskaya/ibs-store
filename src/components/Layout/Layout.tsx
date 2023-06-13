import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

import Header from "../Header/Header";
import { styleContainer } from "@/components/Layout/styles";

const Layout = () => {
  return (
    <Box sx={styleContainer}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
