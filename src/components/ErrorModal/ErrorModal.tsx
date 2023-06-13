import React, { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { Modal, Box, Typography } from "@mui/material";

import { instance } from "@/api";
import { styleModal, styleText } from "@/components/ErrorModal/styles";

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
      <Modal open={!!error}>
        <Box sx={styleModal}>
          <Typography sx={styleText} variant="h1">
            {error.status}
          </Typography>
          <Typography variant="body1">{error.message}</Typography>
        </Box>
      </Modal>
    )
  );
};

export default ErrorModal;
