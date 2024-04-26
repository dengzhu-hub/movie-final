import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameGridProps } from "../constant/type";

const GameHeading = ({ gameQuery }: GameGridProps) => {
  const heading = `${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
