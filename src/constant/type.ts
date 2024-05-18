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
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
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
  sortOrder: string;
  searchText: string;
}
export interface GameGridProps {
  gameQuery: GameQuery;
}

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
