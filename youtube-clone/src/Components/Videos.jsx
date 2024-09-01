import React from 'react';
import { Link } from 'react-router-dom';
import { Box, SimpleGrid, Image, Text } from '@chakra-ui/react';

const VideoCard = ({ id, title, thumbnail }) => (
  <Box>
    <Link to={`/video/${id}`}>
      <Image src={thumbnail} alt={title} rounded="md" />
      <Text mt="2" fontSize="sm" fontWeight="bold">
        {title}
      </Text>
    </Link>
  </Box>
);

const Videos = () => {
  const videoData = [
    { id: '1', title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
    // More video data...
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4">
      {videoData.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} thumbnail={video.thumbnail} />
      ))}
    </SimpleGrid>
  );
};

export default Videos;
