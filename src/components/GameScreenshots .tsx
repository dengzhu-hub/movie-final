import React from 'react';
import {
  Box,
  Image,
  Spinner,
  Text,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import useGameScreenshots from '../hooks/useGameScreenshots ';

interface Props {
  gameId: string | number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, isError, error } = useGameScreenshots(gameId);
  const bg = useColorModeValue('white', 'gray.800');

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (isError) {
    return <Text color="red.500">Error: {error.message}</Text>;
  }

  return (
    <Box p={5} bg={bg} borderRadius="md" boxShadow="lg">
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        {data?.results.map((screenshot) => (
          <Box key={screenshot.id}>
            <Image
              objectFit={'cover'}
              src={screenshot.image}
              alt={`Screenshot ${screenshot.id}`}
              borderRadius="md"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;
