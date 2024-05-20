import { useQuery } from '@tanstack/react-query';
import { FetchMoviesResponse } from '../constant/type';
import ApiClient from '../services/api-client';
const useGameTrailer = (gameId: number | string) => {
  const api = new ApiClient<FetchMoviesResponse>('games');
  return useQuery<FetchMoviesResponse>({
    queryKey: ['gameTrailer', gameId],
    queryFn: () => api.getMovies(gameId),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameTrailer;
