import {
  AspectRatio,
  Box,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useGameTrailer from '../hooks/useGameTralier';
import ReactPlayer from 'react-player';
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const {
    data: trailers,
    isLoading,
    error,
    isPending,
    isFetching,
  } = useGameTrailer(gameId);
  console.log(trailers);
  const boxShadow = useColorModeValue('lg', 'dark-lg');
  const bg = useColorModeValue('white', 'gray.800');
  if (isLoading || isFetching || isPending)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  if (error) {
    return <Text color="red.500">Failed to load trailers</Text>;
  }
  if (!trailers) {
    return <Text>No trailers available</Text>;
  }

  const first = trailers.results[0];
  if (!first) return null;
  return (
    <Box p={5} bg={bg} borderRadius="md" boxShadow={boxShadow}>
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          light={first.preview}
          width={'100%'}
          height={'100%'}
          controls
          playing
          url={first.data.max}
        />
      </AspectRatio>
    </Box>
  );
};

export default GameTrailer;
