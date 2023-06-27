import React from "react";

export interface SearchContext {
  value: string;
  change: (str: string) => void;
}

const initialValue: SearchContext = {
  value: "",
  change: () => {},
};

export default React.createContext<SearchContext>(initialValue);
