export interface Game {
  id: number;
  name: string;
}
export interface FetchGamesProps {
  count: number;
  results: Game[];
}
