import { Button, Image, List, ListItem, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../constant/type";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
  const { data } = useGenres();

  return (
    <List>
      {data?.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              borderRadius={"4px"}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit={"cover"}
              boxSize={"48px"}
            ></Image>
            <Button
              wordBreak={"break-word"}
              variant="link"
              fontSize={"lg"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
