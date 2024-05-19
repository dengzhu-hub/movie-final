import { HStack, Image } from '@chakra-ui/react';
import { logoColor } from '../assets';
import ColorMode from '../components/ColorMode';
import SearchInput from '../components/SearchInput';

const NavBar = () => {
  console.log('NavBar render');
  return (
    <HStack justifyContent={'space-between'}>
      <Image src={logoColor} boxSize={'60px'} />
      <SearchInput />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
