import { CgShoppingBag } from "react-icons/cg";

export default function NavRightItems({
  Wrap,
  WrapItem,
  Tooltip,
  Link,
  FaUser,
  CiSettings,
}) {
  return (
    <div className="flex flex-shrink-0 items-center space-x-4">
      <Wrap spacing={5}>
        <WrapItem>
          <Tooltip
            label="Profile"
            bgColor="black"
            color="white"
            padding={2}
            borderRadius={10}
          >
            <Link to="/login">
              <FaUser color="black" size="21px" />
            </Link>
          </Tooltip>
        </WrapItem>
        <WrapItem>
          <Tooltip
            label="Cart"
            bgColor="black"
            color="white"
            padding={2}
            borderRadius={10}
          >
            <Link to="/">
              <CgShoppingBag color="black" size="21px" />
            </Link>
          </Tooltip>
        </WrapItem>
        <WrapItem>
          <Tooltip
            label="Settings"
            bgColor="black"
            color="white"
            padding={2}
            borderRadius={10}
          >
            <Link to="/">
              <CiSettings color="black" size="21px" />
            </Link>
          </Tooltip>
        </WrapItem>
      </Wrap>
    </div>
  );
}
