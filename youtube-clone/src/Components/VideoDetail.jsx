import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const VideoDetail = () => {
  const { id } = useParams();

  // Fetch video data using the id, or just display it for now
  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold">
        Video ID: {id}
      </Text>
      {/* Additional video details go here */}
    </Box>
  );
};

export default VideoDetail;
