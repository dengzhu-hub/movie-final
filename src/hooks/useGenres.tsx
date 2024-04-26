import { genres } from "../data/genres.ts";
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
