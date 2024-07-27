import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

export default function LoadingSpinner() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(255, 255, 255, 0.8)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
    >
      <Spinner size="xl" color="black" />
    </Box>
  );
}
