import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Videos from './Videos';

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar
  };

  return (
    <Flex>
      <Sidebar isOpen={isSidebarOpen} />
      <Box flex="1" ml={isSidebarOpen ? "64" : "0"} transition="margin-left 0.3s ease" bg="gray-900" minH="100vh">
        <Navbar onMenuClick={handleMenuClick} />
        <Box p="4">
          <Videos />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
