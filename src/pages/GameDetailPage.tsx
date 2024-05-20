import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandTable from '../components/ExpandTable';
import GameAttribute from '../components/GameAttribute';
import GameScreenshots from '../components/GameScreenshots ';
import GameTrailer from '../components/GameTralier';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data: gameDetail, isLoading, isPending, error } = useGame(id!);
  console.log(gameDetail);
  if (isLoading || isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <SimpleGrid columns={[1, 2]}>
      <GridItem mx={5}>
        <Heading>{gameDetail.name}</Heading>

        <ExpandTable>{gameDetail.description_raw}</ExpandTable>
        <GameAttribute gameDetail={gameDetail} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={gameDetail.id} />
        <GameScreenshots gameId={gameDetail.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
