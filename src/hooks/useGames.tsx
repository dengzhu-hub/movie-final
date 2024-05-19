import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { FetchResponse, Game } from '../constant/type';
import ApiClient from '../services/api-client';
import useGameQueryStore from '../store';

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
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
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
