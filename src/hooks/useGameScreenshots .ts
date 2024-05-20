import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import { Screenshot } from '../constant/type';
const useGameScreenshots = (gameId: string | number) => {
  const api = new ApiClient<Screenshot>('games');
  return useQuery({
    queryKey: ['gameScreenshots'],
    queryFn: () => api.getScreenshots(gameId),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameScreenshots;
