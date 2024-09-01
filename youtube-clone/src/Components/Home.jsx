import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Home = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p="4">
        <Videos />
      </Box>
    </Flex>
  );
};

export default Home;
