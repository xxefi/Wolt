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
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Filters({ filter, setFilter }) {
  const [searchFilter, setSearchFilter] = useState(filter.search || "");
  const toast = useToast();

  const handleMenuItemClick = (option) => {
    setFilter((prev) => ({
      ...prev,
      sortOption: option,
    }));
    toast({
      title: `${option}`,
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    setFilter((prev) => ({ ...prev, search: searchFilter }));
  };

  return (
    <div>
      <Tooltip
        bgColor="#fefefe"
        color="black"
        label="Press to search"
        aria-label="Press to search"
      >
        <form onSubmit={handleSubmitChange}>
          <Input
            focusBorderColor="black"
            color="gray"
            width="300px"
            marginBottom="50px"
            placeholder="Search..."
            borderRadius="25px"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <Button borderRadius={20} ml={2} type="submit">
            <FaSearch />
          </Button>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  borderRadius={20}
                  isActive={isOpen}
                  as={Button}
                  marginLeft={5}
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
        </form>
      </Tooltip>
    </div>
  );
}
