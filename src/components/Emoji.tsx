import { Image } from '@chakra-ui/react';
import { emoji } from '../constant';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) {
    return null;
  }
  return <Image {...emoji[rating]}></Image>;
};

export default Emoji;
