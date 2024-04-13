import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList.tsx";
import { useState } from "react";
import { SelectedGenreProps, SelectedPlatformProps } from "./constant/type.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";

function App() {
  const [selectGenre, setSelectGenre] = useState<SelectedGenreProps>(null);
  const [selectPlatform, setSelectPlatform] =
    useState<SelectedPlatformProps>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr ",
        lg: "200px 1fr",
      }}
      gap={11}
    >
      <GridItem area={`nav`}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList
            selectedGenre={selectGenre}
            onSelectGenre={(genre) => setSelectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectPlatform}
          onSelectendPlatform={(platform) => setSelectPlatform(platform)}
        />
        <GameGrid selectedGenre={selectGenre} selectPlatform={selectPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
