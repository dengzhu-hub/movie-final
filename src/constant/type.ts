import { ReactNode } from "react";
import { IconType } from "react-icons";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface FetchGamesProps {
  count: number;
  results: Game[];
}

export interface PlatformIconListProps {
  platforms: Platform[];
}
export interface IconMapProps {
  [key: string]: IconType;
}

export interface CriticScoreProps {
  score: number;
}

//? use type
export type GameCardContainerProps = {
  children: ReactNode
}