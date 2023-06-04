import React from "react";

import styles from "./style.module.scss";

interface Props {
  error?: number;
  message: string;
  isVisible: boolean;
}

const Modal: React.FC<Props> = ({ isVisible, error, message }) => {
  return (
    isVisible && (
      <div className={isVisible ? styles.Modal__active : styles.Modal}>
        <div className={styles.Modal__content}>
          <h1 className={styles.Modal__title}>{error}</h1>
          <p className={styles.Modal__description}>{message}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
