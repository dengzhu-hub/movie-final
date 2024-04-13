import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { sortOrder } from "../constant";

interface SortSelectorProps {
  onSortSelector: (sortOrder: string) => void;
  selectorOrder: string;
}
const SortSelector = ({ onSortSelector, selectorOrder }: SortSelectorProps) => {
  const sortOrderItem = sortOrder.find((sort) => sort.value === selectorOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort by: {sortOrderItem?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem key={sort.value} onClick={() => onSortSelector(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
