import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as Unlike } from "@/assets/images/unlike.svg";

import styles from "./style.module.scss";

interface CardProps {
  id: string;
  name: string;
  alt: string;
  like: boolean;
  price: number;
  picture: string;
}

const Card: React.FC<CardProps> = ({ id, name, alt, like, price, picture }) => {
  const navigate = useNavigate();

  return (
    <div
      role="presentation"
      onClick={() => navigate(`/product/${id}`)}
      className={styles.Card}
    >
      <div className={styles.Card__like}>{like ? <Like /> : <Unlike />}</div>
      <div className={styles.Card__imageWrapper}>
        <img className={styles.Card__image} src={picture} alt={alt} />
      </div>
      <h3 className={styles.Card__title}>{name}</h3>
      <div className={styles.Card__price}>&#36; {price}</div>
    </div>
  );
};

export default Card;
