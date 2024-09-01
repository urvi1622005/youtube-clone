import React from 'react';
import { Box, VStack, Button, Icon } from '@chakra-ui/react';
import { FaHome, FaFire, FaBookOpen, FaHistory } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" w="250px" minH="100vh" p="4">
      <VStack spacing="4" align="start">
        <Button variant="ghost" leftIcon={<Icon as={FaHome} />} justifyContent="start" w="full">
          Home
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaFire} />} justifyContent="start" w="full">
          Trending
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaBookOpen} />} justifyContent="start" w="full">
          Subscriptions
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaHistory} />} justifyContent="start" w="full">
          History
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
