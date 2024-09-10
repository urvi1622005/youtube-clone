import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import { fetchYouTubeVideos } from '../services/fetchvideos';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchYouTubeVideos(id, 1);
        if (results.length > 0) {
          setVideo(results[0]);
        } else {
          setError('Video not found');
        }
      } catch (err) {
        setError('Failed to fetch video details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [id]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!video) return <Text>No video found</Text>;

  return (
    <Box p="4">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">
          {video.title}
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: video.embedHtml }} />
        <Text fontSize="lg">{video.description}</Text>
        <Text>Channel: {video.channelTitle}</Text>
        <Text>Published: {new Date(video.publishedAt).toLocaleDateString()}</Text>
      </VStack>
    </Box>
  );
};

export default VideoDetail;
