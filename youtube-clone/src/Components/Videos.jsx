// src/components/Videos.jsx
import React from 'react';
import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react';

const VideoCard = ({ thumbnail, title, channel, views, uploaded }) => {
  return (
    <Box w="100%" maxW="sm" mb="8" bg="gray-800" borderRadius="lg" overflow="hidden" shadow="lg">
      <Image src={thumbnail} alt={title} w="100%" h="200px" objectFit="cover" />
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold" mb="2" color="white" noOfLines={2}>
          {title}
        </Text>
        <Text fontSize="md" color="gray-400" noOfLines={1}>
          {channel}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" mt="2">
          <Text fontSize="sm" color="gray-400">
            {views} views
          </Text>
          <Text fontSize="sm" color="gray-400">
            {uploaded}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const Videos = () => {
  const videoData = [
    {
      thumbnail: 'https://via.placeholder.com/300x200',
      title: 'Video Title 1',
      channel: 'Channel Name 1',
      views: '1M',
      uploaded: '2 days ago',
    },
    {
      thumbnail: 'https://via.placeholder.com/300x200',
      title: 'Video Title 2',
      channel: 'Channel Name 2',
      views: '500K',
      uploaded: '1 week ago',
    },
    // Add more videos here
  ];

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} p={4}>
      {videoData.map((video, index) => (
        <VideoCard
          key={index}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          uploaded={video.uploaded}
        />
      ))}
    </Grid>
  );
};

export default Videos;
