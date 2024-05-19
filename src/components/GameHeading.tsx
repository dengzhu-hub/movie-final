import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre1 from '../hooks/useGenre1';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = usePlatform(platformId);
  const genre = useGenre1(genreId);

  const heading = `${genre?.name || ''} ${platform?.name || ''} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
