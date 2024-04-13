import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import Spinners from "./sprinner/Spinners";
import { PlatformSelectorProps } from "../constant/type";

const PlatformSelector = ({
  onSelectendPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error, isLoading } = usePlatform();
  if (error) return null;
  if (isLoading) return <Spinners></Spinners>;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : "platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((data) => (
          <MenuItem
            key={data.id}
            onClick={() => {
              console.log(data);

              onSelectendPlatform(data);
            }}
          >
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
