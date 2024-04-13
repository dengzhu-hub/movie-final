import {
  Game,
  SelectedGenreProps,
  SelectedPlatformProps,
} from "../constant/type";

import useFetchData from "./useFetchData";

const useGames = (
  selectedGenre: SelectedGenreProps,
  selectPlatform: SelectedPlatformProps,
) => {
  return useFetchData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectPlatform?.id,
      },
    },
    [selectedGenre?.id, selectPlatform?.id],
  );
};

export default useGames;
