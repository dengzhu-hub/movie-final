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
