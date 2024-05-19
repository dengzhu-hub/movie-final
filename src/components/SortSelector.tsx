import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { sortOrder } from '../constant';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrderString = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrderItem = sortOrder.find(
    (sort) => sort.value === sortOrderString,
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort by: {sortOrderItem?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem key={sort.value} onClick={() => setSortOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
