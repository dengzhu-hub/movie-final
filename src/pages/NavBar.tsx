import { HStack, Image } from '@chakra-ui/react';
import { logoColor } from '../assets';
import ColorMode from '../components/ColorMode';
import SearchInput from '../components/SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('NavBar render');
  return (
    <HStack justifyContent={'space-between'}>
      <Link to="/">
        {' '}
        <Image src={logoColor} boxSize={'60px'} />
      </Link>
      <SearchInput />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
