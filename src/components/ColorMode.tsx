import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorMode;
