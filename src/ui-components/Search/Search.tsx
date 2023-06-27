import React from "react";

import { ReactComponent as SearchImg } from "@/assets/images/search.svg";

import styles from "./style.module.scss";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<Props> = ({ handleChange, value }) => (
  <label className={styles.Search}>
    <SearchImg className={styles.Search__image} />
    <input
      type="text"
      id="search"
      value={value}
      className={styles.Search__input}
      onChange={handleChange}
      placeholder="Search products"
    />
  </label>
);

export default Search;
