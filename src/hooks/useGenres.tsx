import { useEffect, useState } from "react";
import { FetchGenresProps, Genre } from "../constant/type";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const fetchGenres = async () => {
      try {
        const response = await apiClient.get<FetchGenresProps>(`/genres`, {
          signal: controller.signal,
        });
        setGenres(response.data.results);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        else if (error instanceof Error) setError(error.message);
      }
    };
    fetchGenres();
    return () => controller.abort();
  }, []);
  return { isLoading, error, genres };
};
export default useGenres;
