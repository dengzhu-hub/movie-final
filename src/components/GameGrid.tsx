import {
  Text,
  SimpleGrid,
  Button,
  Box,
  HStack,
  Spinner,
} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import CardSkeleton from './CardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameGridProps } from '../constant/type';
import { Fragment } from 'react/jsx-runtime';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={'10px'}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((i) => (
            <GameCardContainer key={i}>
              <CardSkeleton key={i} />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      <Box ref={ref} mt={5}>
        <HStack justify="center">
          {isFetchingNextPage && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          {!isFetchingNextPage && hasNextPage && (
            <Button colorScheme="blue" onClick={() => fetchNextPage()}>
              Load more
            </Button>
          )}
          {!isFetchingNextPage && !hasNextPage && (
            <Text color={'gray.500'} fontSize={'3xl'}>
              No more data
            </Text>
          )}
        </HStack>
      </Box>
    </>
  );
};

export default GameGrid;
