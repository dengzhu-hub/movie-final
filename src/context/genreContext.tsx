import { createContext, ReactElement, useMemo, useState } from "react";
import { Genre, GenreContextType } from "../constant/type";

const initialValue: GenreContextType = {
  selectGenre: null,
  setSelectGenre: () => null,
  onSelectGenre: (genre: Genre) => {
    console.log(genre);
  },
};

const GenreContext = createContext<GenreContextType>(initialValue);
export const GenreProvider = ({ children }: { children: ReactElement }) => {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const onSelectGenre = (genre: Genre) => {
    setSelectGenre(genre);
  };
  const value = useMemo(
    () => ({
      selectGenre,
      setSelectGenre,
      onSelectGenre,
    }),
    [selectGenre],
  );

  return (
    <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
  );
};

export default GenreContext;
