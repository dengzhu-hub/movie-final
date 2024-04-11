import { Box } from "@chakra-ui/react";
import { GameCardContainerProps } from "../constant/type";

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width="300px" borderRadius={"lg"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
