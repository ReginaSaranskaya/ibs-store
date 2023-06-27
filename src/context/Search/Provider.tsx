import React, { useMemo, useState } from "react";

import Context from "./context";

interface IProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  const value = useMemo(() => ({ value: search, change: setSearch }), [search]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
