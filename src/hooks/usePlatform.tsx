import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse, PlatformProps } from '../constant/type';

const usePlatform = () =>
  useQuery<FetchResponse<PlatformProps>, Error>({
    queryKey: ['platform'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<PlatformProps>>('/platforms')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatform;
