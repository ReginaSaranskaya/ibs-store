import React from "react";

import { TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styleSearch, styleSearchIcon } from "@/ui-components/Search/styles";

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<IProps> = ({ handleChange, value }) => (
  <TextField
    sx={styleSearch}
    type="search"
    variant="standard"
    placeholder="Search products"
    onChange={handleChange}
    value={value}
    size="small"
    InputProps={{
      startAdornment: <SearchOutlinedIcon sx={styleSearchIcon} />,
    }}
  />
);

export default Search;
