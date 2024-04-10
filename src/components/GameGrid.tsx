import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchGamesProps, Game } from "../constant/type";
import Spinners from "./sprinner/Spinners";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesProps>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(games);

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [games]);
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinners />}
      <h1>
        {games.map((el) => (
          <p>{el.name}</p>
        ))}
      </h1>
    </>
  );
};

export default GameGrid;
