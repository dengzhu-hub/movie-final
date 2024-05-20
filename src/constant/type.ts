import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IconType } from 'react-icons';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  slug?: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface MetacriticPlatform {
  metascore: number;
  url: string;
}
interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface GameDetail {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  website: string;
  rating: number;
  publishers: Publisher[];
  rating_top: number;
  esrb_rating: ESRBRating;
  parent_platforms: { platform: Platform }[];
  platforms: {
    platform: Platform;
    released_at: string;
    requirements: { minimum: string; recommended: string };
  }[];
  genres: Genre[];
}
export interface GameCardProps {
  game: Game;
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
  children: ReactNode;
};
export type Genre = {
  id: number;
  name: string;
  background_image: string;
  image_background: string;
};

export type FetchGenresProps = {
  count: number;
  results: Genre[];
};

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export interface GenreContextType {
  selectGenre: Genre | null;
  setSelectGenre: Dispatch<SetStateAction<Genre | null>>;
  onSelectGenre: (genre: Genre) => void;
}

export type SelectedGenreProps = Genre | null;

export interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformSelectorProps {
  onSelectendPlatform: (platform: PlatformProps) => void;
  selectedPlatformId?: number | undefined;
}
export type SelectedPlatformProps = PlatformProps | null;

export interface useGameProps {
  selectedGenre: SelectedGenreProps;
  selectPlatform: SelectedPlatformProps;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
export interface GameGridProps {
  gameQuery: GameQuery;
}

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
export interface Movie {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface FetchMoviesResponse {
  results: Movie[];
}

export interface Screenshot {
  id: number;
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}
