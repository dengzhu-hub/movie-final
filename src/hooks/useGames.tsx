import { Game, Genre } from "../constant/type";

import useFetchData from "./useFetchData";

const useGames = (selectedGenre: Genre | null) => {
  return useFetchData<Game>(
    "/games",
    {
      params: {
        platforms: selectedGenre?.id,
      },
    },
    [selectedGenre?.id],
  );
};

export default useGames;
