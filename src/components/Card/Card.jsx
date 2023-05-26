import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Like } from "./like.svg";
import { ReactComponent as Unlike } from "./unlike.svg";
import styles from "./style.module.scss";

const Card = ({ id, name, alt, like, price, picture }) => {
  return (
    <Link to="/item" id={id} className={styles.Card}>
      <div className={styles.Card__like}>{like ? <Like /> : <Unlike />}</div>
      <div className={styles.Card__imageWrapper}>
        <img className={styles.Card__image} src={picture} alt={alt} />
      </div>
      <h3 className={styles.Card__title}>{name}</h3>
      <div className={styles.Card__price}>&#36; {price}</div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  like: PropTypes.bool,
  price: PropTypes.number,
  picture: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;
