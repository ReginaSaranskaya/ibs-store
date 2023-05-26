import React, { useEffect, useState } from "react";

import { instance } from "../../api";
import Modal from "../../ui-components/Modal/Modal";

const ErrorModal = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorInterceptor = instance.interceptors.response.use(
      (data) => data,
      (err) => {
        setError({ status: err.response.status, message: err.message });

        return err;
      }
    );

    return () => {
      instance.interceptors.response.eject(errorInterceptor);
    };
  }, []);

  return (
    error && (
      <Modal isVisible={error} error={error.status} message={error.message} />
    )
  );
};

export default ErrorModal;
