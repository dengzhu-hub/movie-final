import { SimpleGrid, HStack, Text, Image } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinitionItem from './Definitination';
import { GameDetail } from '../constant/type';
interface Props {
  gameDetail: GameDetail;
}
const GameAttribute = ({ gameDetail }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {gameDetail.parent_platforms.map(({ platform }) => (
          <Text key={platform.id} fontSize={'sm'}>
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={gameDetail.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {gameDetail.publishers.map((publisher) => (
          <HStack key={publisher.id} align="start">
            <Image
              src={publisher.image_background}
              alt={publisher.name}
              boxSize="100px"
              objectFit="cover"
            />
            <Text>{publisher.name}</Text>
          </HStack>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {gameDetail.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
