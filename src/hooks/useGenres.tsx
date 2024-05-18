import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client.ts';
import { FetchResponse, Genre } from '../constant/type.ts';
import ms from 'ms';
const useGenres = () => {
  const apiClient = new ApiClient<Genre>('genres');

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: async () => {
      try {
        return await apiClient.getAll();
      } catch (error) {
        throw new Error('Failed to fetch genres');
      }
    },

    staleTime: ms('24h'),
  });
};
export default useGenres;
