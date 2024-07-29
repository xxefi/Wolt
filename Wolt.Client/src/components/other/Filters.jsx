import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Tooltip,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Button,
} from "@chakra-ui/react";

export default function Filters({ filter, setFilter }) {
  const toast = useToast();

  const handleMenuItemClick = (option) => {
    setFilter((prev) => ({
      ...prev,
      sortOption: option,
    }));
    toast({
      title: `Succestful Sorted by ${option}`,
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "bottom right",
    });
  };

  return (
    <div>
      <Tooltip
        bgColor="#fefefe"
        color="black"
        label="Press to search"
        aria-label="Press to search"
      >
        <Input
          focusBorderColor="black"
          color="gray"
          width="300px"
          marginBottom="50px"
          placeholder="Search..."
          borderRadius="25px"
          value={filter.search}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, search: e.target.value }))
          }
        />
      </Tooltip>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              marginLeft={5}
              borderRadius={20}
              isActive={isOpen}
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {filter.sortOption || "Sort"}
            </MenuButton>
            <MenuList padding={2} borderRadius={20}>
              <MenuItem
                borderRadius={20}
                onClick={() => handleMenuItemClick("New")}
              >
                New
              </MenuItem>
              <MenuItem
                borderRadius={20}
                onClick={() => handleMenuItemClick("Price Ascending")}
              >
                Price Ascending
              </MenuItem>
              <MenuItem
                borderRadius={20}
                onClick={() => handleMenuItemClick("Price Descending")}
              >
                Price Descending
              </MenuItem>
              <MenuItem
                borderRadius={20}
                onClick={() => handleMenuItemClick("No Sort")}
              >
                No Sort
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
}
