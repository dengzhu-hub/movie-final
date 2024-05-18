import { Heading } from '@chakra-ui/react';
import { GameGridProps } from '../constant/type';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';

const GameHeading = ({ gameQuery }: GameGridProps) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId,
  );

  const heading = `${genre?.name || ''} ${platform?.name || ''} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
