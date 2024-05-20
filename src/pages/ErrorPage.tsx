// src/ErrorPage.js
import { Box, Heading, Text, Button, VStack, Image } from '@chakra-ui/react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import { error } from '../assets';

const ErrorPage = () => {
  const errors = useRouteError();
  console.log(errors);
  const navigate = useNavigate();
  let errorMessage: string = '';
  if (isRouteErrorResponse(errors)) {
    // React Router specific error
    if (errors.status === 404) {
      errorMessage = "The page you're looking for was not found.";
    } else if (errors.status === 500) {
      errorMessage = 'Internal server error. Please try again later.';
    } else {
      errorMessage = errors.statusText;
    }
  } else if (errors instanceof Error) {
    // General JavaScript error
    errorMessage = errors.message;
  } else {
    // Unknown error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMessage = 'An unknown error occurred.';
  }

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
