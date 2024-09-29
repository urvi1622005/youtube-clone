// import axios from 'axios';

// const API_URL = "https://pixabay.com/api/videos/"; // Pixabay API URL
// const API_KEY = "45732391-f756039ab92580501d5bae5f9"; // Your API key

// export const fetchYouTubeVideos = async (query, maxResults = 10) => {
//   try {
//     const response = await axios.get(API_URL, {
//       params: {
//         q: query,             // The search query term
//         per_page: maxResults, // Limit the number of results
//         key: API_KEY          // Your Pixabay API key
//       }
//     });

//     // Mapping the API response to your expected format
//     return response.data.hits.map(item => ({
//       id: item.id,                      // Video ID
//       title: item.tags,                 // Using tags as the title
//       description: item.pageURL,        // Video page URL as description
//       thumbnail: item.videos.tiny.url,  // Tiny video thumbnail URL
//       channelTitle: item.user,          // Username as channel title
//       publishedAt: item.userImageURL    // User profile image URL
//     }));
//   } catch (error) {
//     console.error('Error fetching videos:', error);
//     throw error;
//   }
// };
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchYouTubeVideos } from '../services/fetchvideos'; // Ensure this path is correct

const VideoDetail = () => {
  const { id } = useParams(); // Get the video ID from URL
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videos = await fetchYouTubeVideos(id, 1); // Fetch one video based on ID
        setVideo(videos[0]); // Use the first video in the result
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch video details.');
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {video ? (
        <>
          <h1>{video.title}</h1>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.description}</p>
          <h4>Uploaded by: {video.channelTitle}</h4>
          <img src={video.publishedAt} alt="User Profile" />
        </>
      ) : (
        <div>Video not found</div>
      )}
    </div>
  );
};

export default VideoDetail;
