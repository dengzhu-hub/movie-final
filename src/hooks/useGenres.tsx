import { useQuery } from '@tanstack/react-query';
import { genres } from '../data/genres.ts';
import apiClient from '../services/api-client.ts';
import { FetchResponse, Genre } from '../constant/type.ts';
const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: 1000 * 60 * 60,
    refetchInterval: 1000 * 60 * 60,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  });
export default useGenres;
