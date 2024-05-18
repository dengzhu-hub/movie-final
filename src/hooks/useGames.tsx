import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../constant/type';
import ApiClient from '../services/api-client';
import ms from 'ms';

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new ApiClient<Game>('games');
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) => {
      return await apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      });
    },
    staleTime: ms('24h'),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
