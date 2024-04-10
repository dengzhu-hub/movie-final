import { HStack, Image, Text } from "@chakra-ui/react";
import { logoColor } from "../assets";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logoColor} boxSize={"60px"} />
      <Text>navbar</Text>
    </HStack>
  );
};

export default NavBar;
