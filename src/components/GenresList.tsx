import { Button, Image, List, ListItem, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GenreListProps } from "../constant/type";

const GenresList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
              variant="link"
              color={genre.id === selectedGenre?.id ? "red" : "white"}
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
