import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneAndroid, MdDesktopMac } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconMapProps } from "./type";

export const iconMap: IconMapProps = {
  pc: FaWindows,
  xbox: FaXbox,
  playstation: FaPlaystation,
  linux: FaLinux,
  android: MdPhoneAndroid,
  web: BsGlobe,
  mac: MdDesktopMac,
  nintendo: SiNintendo,
  ios: FaApple,
};
export const sortOrder = [
  {
    value: "name",
    label: "Name",
  },
  { value: "-released", label: "Release Date" },
  {
    value: "-added",
    label: "Added Date",
  },
  {
    value: "rating",
    label: "Rating",
  },
  {
    value: "-updated",
    label: "Updated Date",
  },
  {
    value: "metacritic",
    label: "Popular",
  },
];
