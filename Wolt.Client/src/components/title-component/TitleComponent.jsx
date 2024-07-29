import { Input, Tooltip, Box } from "@chakra-ui/react";
import React from "react";
import "../../styles/TitleComponent.css";

export default function TitleComponent() {
  return (
    <Box position="absolute" bottom="50%" right="50%">
      <Box textAlign="center">
        <Box mb={4}>
          <h1 className="typewriter">Did you know?</h1>
        </Box>

        <Box display="flex" justifyContent="center" mr={28}>
          <p
            style={{
              opacity: "0.7",
              fontSize: "1.3rem",
              maxWidth: "48rem",
              fontWeight: "bold",
              textWrap: "wrap",
            }}
          >
            Getting home-delivered sushi is more than your life made easy. When
            you order with Wolt, you help thousands of hard-working restaurant
            and store owners and couriers make a living.
          </p>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Tooltip
            label="Enter address"
            bg="black"
            borderRadius={10}
            padding={2}
          >
            <Input
              bg="white"
              boxShadow="4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
              w={400}
              h={14}
              borderRadius={12}
              mt={2}
              placeholder="😍 Enter delivery address..."
              fontWeight="bold"
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
