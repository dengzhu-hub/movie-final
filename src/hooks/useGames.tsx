import { Game, GameQuery } from "../constant/type";

import useFetchData from "./useFetchData";

const useGames = (gameQuery: GameQuery) => {
  return useFetchData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
      },
    },
    [gameQuery],
  );
};

export default useGames;
