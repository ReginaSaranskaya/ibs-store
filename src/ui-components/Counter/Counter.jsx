import React, { useState } from "react";

import styles from "./style.module.scss";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCount(Number(e.target.value));
  };

  return (
    <div className={styles.Counter}>
      <button
        type="button"
        onClick={decrement}
        className={styles.Counter__button}
      >
        &#8722;
      </button>
      <label className={styles.Counter__label}>
        <input
          value={count === 0 ? "" : count}
          type="number"
          className={styles.Counter__input}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        onClick={increment}
        className={styles.Counter__button}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
