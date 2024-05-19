import { create } from 'zustand';
import { GameQuery } from './constant/type';
import { mountStoreDevtool } from 'simple-zustand-devtools';
interface GameQueryStoreProps {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStoreProps>((set) => ({
  gameQuery: {
    genreId: 10,
  },
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformId,
      },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        sortOrder,
      },
    })),
}));

const env = import.meta.env.VITE_NODE_ENV;
console.log(env);
if (env === 'development') {
  mountStoreDevtool('game query', useGameQueryStore);
}

export default useGameQueryStore;
