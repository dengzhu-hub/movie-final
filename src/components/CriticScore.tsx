import { CriticScoreProps } from '../constant/type';
import { Badge } from '@chakra-ui/react';

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge paddingX={3} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
