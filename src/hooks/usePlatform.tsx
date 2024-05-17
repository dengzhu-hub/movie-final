import { useQuery } from '@tanstack/react-query';
import { FetchResponse, PlatformProps } from '../constant/type';
import ApiClient from '../services/api-client';
import { platforms } from '../data/platform';
const usePlatform = () => {
  const apiClient = new ApiClient<PlatformProps>('/platforms/lists/parents');
  return useQuery<FetchResponse<PlatformProps>, Error>({
    queryKey: ['platform'],
    queryFn: async () => {
      try {
        return await apiClient.getAll();
      } catch (error) {
        throw new Error('Failed to fetch platforms');
      }
    },
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });
};

export default usePlatform;
