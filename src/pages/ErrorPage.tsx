// src/ErrorPage.js
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { error } from '../assets';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.200"
      p={4}
    >
      <VStack spacing={4} textAlign="center">
        <Image src={error} alt="Error Image" width={'50%'} objectFit="cover" />
        <Heading as="h1" size="2xl">
          Oops! Something went wrong.
        </Heading>
        <Text fontSize="lg">
          The page you are looking for does not exist or an error occurred.
        </Text>
        <Button colorScheme="teal" onClick={handleGoBack}>
          Go Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
