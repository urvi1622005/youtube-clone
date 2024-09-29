import axios from 'axios';

const API_URL = "https://pixabay.com/api/videos/"; 
const API_KEY = "45732391-f756039ab92580501d5bae5f9"; 

// Ensure the function is correctly exported
export const fetchYouTubeVideos = async (query, maxResults = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,             
        per_page: maxResults, 
        key: API_KEY          
      }
    });

    // Mapping the API response to your expected format
    return response.data.hits.map(item => ({
      id: item.id,                      // Video ID
      title: item.tags,                 // Using tags as the title
      description: item.pageURL,        // Video page URL as description
      thumbnail: item.videos.tiny.url,  // Tiny video thumbnail URL
      channelTitle: item.user,          // Username as channel title
      publishedAt: item.userImageURL    // User profile image URL
    }));
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
