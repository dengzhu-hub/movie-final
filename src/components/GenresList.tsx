import {
  Button,
  Image,
  List,
  ListItem,
  HStack,
  Heading,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { GenreListProps } from '../constant/type';
import Spinners from './sprinner/Spinners';

const GenresList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
  const { isLoading, data: genres, error } = useGenres();

  if (error) return;
  if (isLoading) return <Spinners></Spinners>;
  return (
    <>
      <Heading as={'h1'} fontSize={'2xl'} marginBottom={5}>
        genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem paddingY={'5px'} key={genre.id}>
            <HStack>
              <Image
                borderRadius={'4px'}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={'cover'}
                boxSize={'48px'}
              ></Image>
              <Button
                whiteSpace={'normal'}
                variant="link"
                textAlign={'left'}
                objectFit={'cover'}
                color={genre.id === selectedGenreId ? 'red' : 'white'}
                fontSize={'lg'}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
