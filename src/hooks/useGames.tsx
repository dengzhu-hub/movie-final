import { Game, SelectedGenreProps } from "../constant/type";

import useFetchData from "./useFetchData";

const useGames = (selectedGenre: SelectedGenreProps) => {
  return useFetchData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id],
  );
};

export default useGames;
