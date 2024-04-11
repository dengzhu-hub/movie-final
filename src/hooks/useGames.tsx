import { useEffect, useState } from "react";
import { FetchGamesProps, Game } from "../constant/type";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesProps>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);

        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return {
    games,
    isLoading,
    error,
  };
}
