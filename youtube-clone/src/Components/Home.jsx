import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Videos from './Videos';

// Create an axios instance for the YouTube API
const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 50,
    key: 'YOUR_API_KEY_HERE', 
  },
});

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const { data: videos, isLoading, isError } = useQuery({
    queryKey: ['videos', searchTerm],
    queryFn: () => 
      youtubeApi.get('/search', { params: { q: searchTerm || 'popular videos' } })
        .then(res => res.data.items),
    enabled: !!searchTerm, 
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Flex>
      <Sidebar isOpen={isSidebarOpen} />
      <Box flex="1" ml={isSidebarOpen ? "64" : "0"} transition="margin-left 0.3s ease" bg="gray.900" minH="100vh">
        <Navbar onMenuClick={handleMenuClick} onSearch={handleSearch} />
        <Box p="4">
          {isLoading ? (
            <Text color="white">Loading videos...</Text>
          ) : isError ? (
            <Text color="red.500">Error fetching videos</Text>
          ) : (
            <Videos videos={videos} />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
