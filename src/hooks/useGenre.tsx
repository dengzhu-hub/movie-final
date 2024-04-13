import { useContext } from "react";
import GenreContext from "../context/genreContext";

const useGenreContext = () => {
  const useGenre = useContext(GenreContext);
  return useGenre;
};

export default useGenreContext;
