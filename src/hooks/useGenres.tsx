import { useQuery } from '@tanstack/react-query';
import { genres } from '../data/genres.ts';
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
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};
export default useGenres;
