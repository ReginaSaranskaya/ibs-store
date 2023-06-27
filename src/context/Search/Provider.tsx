import React, { useMemo, useState } from "react";

import Context from "./context";

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleChange = (str: string) => setSearch(str);

  const value = useMemo(
    () => ({ value: search, change: handleChange }),
    [search]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
