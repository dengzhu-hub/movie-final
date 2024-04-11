import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../constant/type";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width="300px" borderRadius={"lg"}  overflow={'hidden'}>
      <Image src={game.background_image} alt="game-image" />
      <Stack>
        <CardBody>
          <Heading>{game.name}</Heading>
          <HStack justifyContent={"space-between"} marginTop={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform,
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default GameCard;
