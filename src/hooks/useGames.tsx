import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../constant/type';
import ApiClient from '../services/api-client';

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new ApiClient<Game>('games');
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) => {
      return await apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
