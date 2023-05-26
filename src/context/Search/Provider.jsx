import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import Context from "./context";

const Provider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleChange = (str) => setSearch(str);

  const value = useMemo(
    () => ({ value: search, change: handleChange }),
    [search]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
