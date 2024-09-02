// src/components/Sidebar.jsx
import React from 'react';
import { Box, VStack, Button, Icon } from '@chakra-ui/react';
import { FaHome, FaFire, FaBookOpen, FaHistory, FaYoutube } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <Box
      bg="gray-900"
      color="white"
      w={isOpen ? "64" : "0"} // Adjust the width based on the isOpen prop
      h="100vh"
      p={isOpen ? "4" : "0"} // Adjust padding based on the isOpen prop
      position="fixed"
      top="0"
      left="0"
      overflow="hidden"
      transition="width 0.3s ease, padding 0.3s ease"
      display={isOpen ? "flex" : "none"} // Hide the content if the sidebar is closed
      flexDirection="column"
    >
      <VStack spacing="4" align="start">
        <Button variant="ghost" leftIcon={<Icon as={FaHome} />} justifyContent="start" w="full" fontSize="md">
          Home
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaFire} />} justifyContent="start" w="full" fontSize="md">
          Trending
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaBookOpen} />} justifyContent="start" w="full" fontSize="md">
          Subscriptions
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaHistory} />} justifyContent="start" w="full" fontSize="md">
          History
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FaYoutube} />} justifyContent="start" w="full" fontSize="md">
          Your Videos
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
