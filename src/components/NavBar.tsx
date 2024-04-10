import { HStack, Image } from "@chakra-ui/react";
import { logoColor } from "../assets";
import ColorMode from "./ColorMode";
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Image src={logoColor} boxSize={"60px"} />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
