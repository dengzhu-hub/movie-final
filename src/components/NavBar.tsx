import { HStack, Image } from '@chakra-ui/react';
import { logoColor } from '../assets';
import ColorMode from './ColorMode';
import SearchInput from './SearchInput';
import { SearchInputProps } from '../constant/type';

const NavBar = ({ onSearch }: SearchInputProps) => {
  console.log('NavBar render');
  return (
    <HStack justifyContent={'space-between'}>
      <Image src={logoColor} boxSize={'60px'} />
      <SearchInput onSearch={onSearch} />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
