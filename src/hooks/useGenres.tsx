import { Genre } from "../constant/type.ts";
import useFetchData from "./useFetchData.tsx";

const useGenres = () => useFetchData<Genre>("/genres");
export default useGenres;
