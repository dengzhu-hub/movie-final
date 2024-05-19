import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
} from 'react-icons/fa';
import { MdPhoneAndroid, MdDesktopMac } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo } from 'react-icons/si';
import { IconMapProps } from './type';
import { ImageProps } from '@chakra-ui/react';
import { bull, meh, thumbup } from '../assets';

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
export const emoji: { [key: number]: ImageProps } = {
  3: { src: bull, alt: 'good', boxSize: '25px' },
  4: { src: meh, alt: 'keep try', boxSize: '25px' },
  5: { src: thumbup, alt: 'amazon', boxSize: '35px' },
};
export const sortOrder = [
  {
    value: 'name',
    label: 'Name',
  },
  { value: '-released', label: 'Release Date' },
  {
    value: '-added',
    label: 'Added Date',
  },
  {
    value: 'rating',
    label: 'Rating',
  },
  {
    value: '-updated',
    label: 'Updated Date',
  },
  {
    value: 'metacritic',
    label: 'Popular',
  },
];
