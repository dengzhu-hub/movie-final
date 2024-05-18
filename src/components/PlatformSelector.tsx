import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import Spinners from './sprinner/Spinners';
import { PlatformSelectorProps } from '../constant/type';

const PlatformSelector = ({
  onSelectendPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data: platforms, error, isLoading } = usePlatform();
  const platform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId,
  );
  console.log(platform);

  if (error) return null;
  if (isLoading) return <Spinners></Spinners>;

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
