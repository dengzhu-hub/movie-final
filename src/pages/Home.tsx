import { Box, Grid, Show, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: '1fr ',
        lg: '200px 1fr',
      }}
      gap={11}
    >
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingLeft={3}>
          <GameHeading />
          <HStack spacing={10} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
