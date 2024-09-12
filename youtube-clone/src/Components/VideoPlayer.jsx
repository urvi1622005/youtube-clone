import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';

const Videos = () => {
  const videoData = [
    { id: 'video1', title: 'Video 1', thumbnail: 'path/to/thumbnail1.jpg' },
    { id: 'video2', title: 'Video 2', thumbnail: 'path/to/thumbnail2.jpg' },
  
  ];

  return (
    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videoData.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id}>
          <Box className="bg-gray-800 rounded-lg overflow-hidden">
            <Image src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <Text className="text-white p-2 font-semibold">{video.title}</Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Videos;
