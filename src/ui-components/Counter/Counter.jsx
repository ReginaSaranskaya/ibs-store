import React, { Component } from "react";

import styles from "./style.module.scss";

class Counter extends Component {
  render() {
    return (
      <div className={styles.Counter}>
        <button className={styles.Counter__button}>&#8722;</button>
        <label className={styles.Counter__label}>
          <input
            value="1"
            type="number"
            className={styles.Counter__input}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>
        <button className={styles.Counter__button}>+</button>
      </div>
    );
  }
}

export default Counter;
