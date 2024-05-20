import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading color={'gray.600'} fontSize={'lg'} fontWeight={'bold'} as={'dt'}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
