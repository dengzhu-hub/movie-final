import useGenres from './useGenres';

const useGenre1 = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
};

export default useGenre1;
