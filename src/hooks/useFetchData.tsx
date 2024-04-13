import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../constant/type.ts";
import { AxiosRequestConfig, CanceledError } from "axios";

export default function useFetchData<T>(
  endpoint: string,
  requestOptions?: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deps?: unknown[],
) {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestOptions,
          });
          setData(response.data.results);
          setIsLoading(false);
        } catch (error) {
          if (error instanceof CanceledError) {
            return;
          } else if (error instanceof Error) {
            setError(error.message);
            setIsLoading(false);
          }
        }
      };
      fetchData();
      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );
  return { isLoading, error, data };
}
