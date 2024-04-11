import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../constant/type";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={game.background_image} alt="game-image" borderRadius={"lg"} />
      <Stack>
        <CardBody>
          <Heading>{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform,
            )}
          />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default GameCard;
