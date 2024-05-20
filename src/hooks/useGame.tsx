import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import { GameDetail } from '../constant/type';
const useGame = (slug: string | number) => {
  const api = new ApiClient<GameDetail>(`games`);
  return useQuery<GameDetail, Error>({
    queryKey: ['gameDetail', slug],
    queryFn: () => api.get(slug),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useGame;
