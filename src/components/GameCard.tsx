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
    <Link to={`game/${game.slug}`}>
      <Card
        _hover={{
          cursor: 'pointer',
          boxShadow: 'xl', // 添加阴影
          transform: 'scale(1.05)', // 放大效果
          transition: 'all 0.3s ease-in-out', // 平滑过渡效果
        }}
      >
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
              {game.name} <Emoji rating={game.rating_top} />
            </Heading>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default GameCard;
