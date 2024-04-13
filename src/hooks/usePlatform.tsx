import { PlatformProps } from "../constant/type";
import useFetchData from "./useFetchData";

const usePlatform = () =>
  useFetchData<PlatformProps>("/platforms/lists/parents");
export default usePlatform;
