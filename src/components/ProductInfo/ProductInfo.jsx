import React, { Component } from "react";
import PropTypes from "prop-types";

import Counter from "../../ui-components/Counter/Counter";
import Button from "../../ui-components/Button/Button";
import { ReactComponent as Like } from "../Card/like.svg";
import { ReactComponent as Unlike } from "../Card/unlike.svg";
import styles from "./style.module.scss";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.ProductInfo}>
        <h1 className={styles.ProductInfo__title}>{this.props.name}</h1>
        <p className={styles.ProductInfo__description}>
          {this.props.description}
        </p>
        <h2 className={styles.ProductInfo__title}>Details</h2>
        <p className={styles.ProductInfo__description}>{this.props.details}</p>
        <div className={styles.ProductInfo__cartInfo}>
          <div className={styles.ProductInfo__price}>
            &#36; {this.props.price}
          </div>
          <Counter />
          <Button />
          <div className={styles.ProductInfo__like}>
            {this.props.like ? <Like /> : <Unlike />}
          </div>
        </div>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.number,
  like: PropTypes.bool,
};

export default ProductInfo;
