import React, { useContext } from "react";

import Context from "@/context/Search/context";
import Search from "@/ui-components/Search/Search";
import { ReactComponent as Cart } from "@/assets/images/cart.svg";
import { ReactComponent as Personal } from "@/assets/images/personal.svg";

import styles from "./style.module.scss";

const Header: React.FC = () => {
  const context = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.change(e.target.value);
  };

  return (
    <header className={styles.Header}>
      <Search handleChange={handleChange} value={context?.value} />
      <div className={styles.Header__wrapper}>
        <a href="#" className={styles.Header__link}>
          <Cart className={styles.Header__icon} />
        </a>
        <a href="#" className={styles.Header__link}>
          <Personal className={styles.Header__icon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
