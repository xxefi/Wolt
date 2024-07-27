import { Tooltip, useToast } from "@chakra-ui/react";

export default function SearchBox({
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FaSearch,
}) {
  const toast = useToast();

  const handleSearchClick = () => {
    toast({
      title: `Error`,
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "bottom right",
    });
  };
  return (
    <div className="flex justify-center items-center">
      <Tooltip
        bgColor="#fefefe"
        color="black"
        label="Press to search"
        aria-label="Press to search"
      >
        <InputGroup width="350px" marginTop="15px">
          <Input
            focusBorderColor="black"
            color="gray"
            width="350px"
            placeholder="Search..."
            borderRadius="25px"
          />
          <InputRightElement>
            <Button
              onClick={handleSearchClick}
              variant="ghost"
              size="sm"
              colorScheme="white"
              borderRadius="50%"
              right={1}
            >
              <FaSearch color="gray" size={20} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Tooltip>
    </div>
  );
}
