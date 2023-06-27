import React, { useState } from "react";

import { Button, TextField, Stack } from "@mui/material";

import {
  styleButton,
  styleInput,
  styleStack,
} from "@/ui-components/Counter/styles";

const Counter: React.FC = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCount(Number(e.target.value));
  };

  return (
    <Stack sx={styleStack} direction="row">
      <Button
        color="secondary"
        sx={styleButton}
        variant="outlined"
        onClick={decrement}
      >
        &#8722;
      </Button>
      <TextField
        sx={styleInput}
        type="number"
        size="small"
        variant="outlined"
        value={count}
        onChange={handleChange}
      />
      <Button
        color="secondary"
        sx={styleButton}
        variant="outlined"
        onClick={increment}
      >
        +
      </Button>
    </Stack>
  );
};

export default Counter;
