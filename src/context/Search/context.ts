import React from "react";

export interface ISearchContext {
  value: string;
  change: (str: string) => void;
}

const initialValue: ISearchContext = {
  value: "",
  change: () => {},
};

export default React.createContext<ISearchContext>(initialValue);
