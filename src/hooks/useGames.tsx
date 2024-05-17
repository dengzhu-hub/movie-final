import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../constant/type';

import apiClient from '../services/api-client';

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get('games', {
          params: {
            genres: gameQuery?.genre?.id,
            platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.data),
  });
};

export default useGames;
