import { Box } from '@chakra-ui/react';
import { GameCardContainerProps } from '../constant/type';

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        boxShadow: 'xl', // 添加阴影
        transform: 'scale(1.05)', // 放大效果
        transition: 'all 0.3s ease-in-out', // 平滑过渡效果
      }}
      maxW={['sm', 'md', 'lg', 'xl']}
      borderRadius={'lg'}
      overflow={'hidden'}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
