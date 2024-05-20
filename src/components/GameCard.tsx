import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import { GameCardProps } from '../constant/type';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={game.background_image} alt="game-image" />
      <Stack>
        <CardBody>
          <HStack justifyContent={'space-between'} marginTop={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform,
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={24} fontWeight={400}>
            <Link to={`game/${game.slug}`}>
              {game.name} <Emoji rating={game.rating_top} />
            </Link>
          </Heading>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default GameCard;
