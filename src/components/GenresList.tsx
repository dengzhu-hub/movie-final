import {
  Button,
  Image,
  List,
  ListItem,
  HStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import Spinners from './sprinner/Spinners';
import useGameQueryStore from '../store';

const GenresList = () => {
  const { isLoading, data: genres, error } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const textColor = useColorModeValue('black', 'white');
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
                fontWeight={genreId === genre.id ? 'bold' : 'normal'}
                color={textColor}
                fontSize={'lg'}
                onClick={() => setGenreId(genre.id)}
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
