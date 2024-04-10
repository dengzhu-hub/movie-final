import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={"150px 1fr"}
      gridTemplateRows={"50px 1fr 30px"}
      justifyContent={"center"}
    >
      <GridItem area={`nav`} >
        <NavBar />
      </GridItem>
      <Show breakpoint="(min-width: 960px)">
        <GridItem area={"aside"} bg={"pink.300"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"red.500"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
