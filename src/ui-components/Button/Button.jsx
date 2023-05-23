import React, { Component } from "react";

import styles from "./style.module.scss";

class Button extends Component {
  render() {
    return <button className={styles.Button}>Add to cart</button>;
  }
}

export default Button;
