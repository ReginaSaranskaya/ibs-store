import React from "react";

import Counter from "@/ui-components/Counter/Counter";
import Button from "@/ui-components/Button/Button";

import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as Unlike } from "@/assets/images/unlike.svg";

import styles from "./style.module.scss";

export interface Props {
  name: string;
  like: boolean;
  description: string;
  price: number;
  details: string;
}

const ProductInfo: React.FC<Props> = ({
  name,
  like,
  description,
  price,
  details,
}) => {
  return (
    <div className={styles.ProductInfo}>
      <h1 className={styles.ProductInfo__title}>{name}</h1>
      <p className={styles.ProductInfo__description}>{description}</p>
      <h2 className={styles.ProductInfo__title}>Details</h2>
      <p className={styles.ProductInfo__description}>{details}</p>
      <div className={styles.ProductInfo__cartInfo}>
        <div className={styles.ProductInfo__price}>&#36; {price}</div>
        <Counter />
        <Button />
        <div className={styles.ProductInfo__like}>
          {like ? <Like /> : <Unlike />}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
