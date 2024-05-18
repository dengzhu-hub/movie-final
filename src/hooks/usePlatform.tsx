import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Platform, PlatformProps } from '../constant/type';
import ApiClient from '../services/api-client';
const usePlatform = () => {
  const apiClient = new ApiClient<PlatformProps>('/platforms/lists/parents');
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platform'],
    queryFn: async () => {
      try {
        return await apiClient.getAll();
      } catch (error) {
        throw new Error('Failed to fetch platforms');
      }
    },
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60 * 60,
    refetchIntervalInBackground: true,
  });
};

export default usePlatform;
