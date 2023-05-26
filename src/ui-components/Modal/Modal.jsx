import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Modal = ({ isVisible, error, message }) => {
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

Modal.propTypes = {
  isVisible: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  error: PropTypes.number,
  message: PropTypes.string,
};

export default Modal;
