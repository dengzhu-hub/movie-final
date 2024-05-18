import { Heading } from '@chakra-ui/react';
import { GameGridProps } from '../constant/type';
import usePlatform from '../hooks/usePlatform';
import useGenre1 from '../hooks/useGenre1';

const GameHeading = ({ gameQuery }: GameGridProps) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre1(gameQuery.genreId);

  const heading = `${genre?.name || ''} ${platform?.name || ''} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
