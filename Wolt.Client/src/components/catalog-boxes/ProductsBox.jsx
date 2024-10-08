import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
export default function ProductsBox({ imageSrc, name, description, price }) {
  return (
    <Box
      borderWidth="5px"
      borderRadius="25px"
      overflow="hidden"
      boxShadow="sm"
      _hover={{
        transform: "rotate(2deg)",
        boxShadow: "md",
      }}
      p={7}
      bg="white"
      maxW={"sm"}
      transition="all 0.3s"
    >
      <Image src={imageSrc} alt={name} mb={4} borderRadius={15} />
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
            <strong>{price} ₼</strong>
          </Text>
        </Box>
      </Box>
      <div className="flex flex-col justify-center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            textTransform: "none",
            borderRadius: 2,
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
