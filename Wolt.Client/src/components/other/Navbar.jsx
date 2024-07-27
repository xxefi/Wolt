import Button from "@mui/material/Button";
import { Text, Wrap, WrapItem, Tooltip } from "@chakra-ui/react";
import { Disclosure } from "@headlessui/react";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavItems from "../nav-items/NavItems";
import NavRightItems from "../nav-items/NavRightItems";
import NavLeftItem from "../nav-items/NavLeftItem";

export default function Navbar() {
  return (
    <div>
      <Disclosure
        as="nav"
        className="bg-slate-100 fixed top-0 left-0 w-full z-10"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <NavLeftItem Text={Text} Link={Link} />
            <NavItems
              Wrap={Wrap}
              WrapItem={WrapItem}
              Tooltip={Tooltip}
              FaUser={FaUser}
              CiSettings={CiSettings}
              Button={Button}
              Link={Link}
            />
            <NavRightItems
              Wrap={Wrap}
              WrapItem={WrapItem}
              Tooltip={Tooltip}
              Link={Link}
              FaUser={FaUser}
              CiSettings={CiSettings}
            />
          </div>
        </div>
      </Disclosure>

      <div className="pt-16"></div>
    </div>
  );
}
