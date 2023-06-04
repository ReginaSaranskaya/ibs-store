import React, { useEffect, useState } from "react";
import type { AxiosError } from "axios";

import { instance } from "@/api";
import Modal from "../../ui-components/Modal/Modal";

export interface Error {
  status?: number;
  message: string;
}

const ErrorModal: React.FC = () => {
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const errorInterceptor = instance.interceptors.response.use(
      (data) => data,
      (err: AxiosError) => {
        setError({ status: err.response?.status, message: err.message });

        return err;
      }
    );

    return () => {
      instance.interceptors.response.eject(errorInterceptor);
    };
  }, []);

  return (
    error && (
      <Modal isVisible={!!error} error={error.status} message={error.message} />
    )
  );
};

export default ErrorModal;
