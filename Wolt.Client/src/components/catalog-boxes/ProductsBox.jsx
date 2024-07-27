import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
export default function ProductsBox({ imageSrc, name, description, price }) {
  return (
    <Box
      borderWidth="10px"
      borderRadius="25px"
      overflow="hidden"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      p={7}
      bg="white"
      maxW={"sm"}
      transition="all 0.3s"
    >
      <Image src={imageSrc} alt={name} mb={5} borderRadius={10} />
      <Box>
        <Box d="flex" alignItems="baseline">
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Text>
        </Box>
        <Box d="flex" alignItems="baseline">
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {description}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" color="black">
            ${price}
          </Text>
        </Box>
      </Box>
      <div className="flex flex-col justify-center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            textTransform: "none",
            mt: "10px",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          <p>Buy now</p>
        </Button>
      </div>
    </Box>
  );
}
