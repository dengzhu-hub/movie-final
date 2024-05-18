import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client.ts';
import { FetchResponse, Genre } from '../constant/type.ts';
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
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGenres;
