import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';
import { PlatformSelectorProps } from '../constant/type';

const PlatformSelector = ({
  onSelectendPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data: platforms, error, isLoading } = usePlatform();
  const platform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId,
  );

  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId ? platform?.name : 'platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((data) => (
          <MenuItem
            key={data.id}
            onClick={() => {
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
