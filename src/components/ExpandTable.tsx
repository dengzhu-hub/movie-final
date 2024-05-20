/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}
const ExpandTable = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!isExpanded);
  const limit = 500;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buttonBg = useColorModeValue('teal.500', 'teal.300');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buttonHoverBg = useColorModeValue('teal.600', 'teal.400');
  return (
    <Box marginY={'5px'}>
      <Text color={useColorModeValue('gray.800', 'gray.300')} fontSize={'lg'}>
        {isExpanded ? children : children.substring(0, limit) + '...'}
      </Text>
      <Button
        bg={buttonBg}
        _hover={{
          bg: buttonHoverBg,
        }}
        onClick={toggleExpanded}
        mt={2}
        size={'sm'}
        color={'white'}
      >
        {isExpanded ? 'show less' : 'show more'}
      </Button>
    </Box>
  );
};

export default ExpandTable;
