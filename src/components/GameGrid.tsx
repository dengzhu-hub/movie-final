import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { SelectedGenreProps, SelectedPlatformProps } from "../constant/type";
interface Props {
  selectedGenre: SelectedGenreProps;
  selectPlatform: SelectedPlatformProps;
}

const GameGrid = ({ selectedGenre, selectPlatform }: Props) => {
  const { data, isLoading, error } = useGames(selectedGenre, selectPlatform);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((i) => (
            <GameCardContainer key={i}>
              <CardSkeleton key={i} />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
