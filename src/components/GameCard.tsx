import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { GameCardProps } from "../constant/type";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={game.background_image} alt="game-image" />
      <Stack>
        <CardBody>
          <Heading fontSize={24} fontWeight={400}>{game.name}</Heading>
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
