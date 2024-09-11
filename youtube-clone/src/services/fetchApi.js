import axios from 'axios';


const API_KEY = ''; 
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYouTubeVideos = async (query, maxResults = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: maxResults,
        key: API_KEY
      }
    });

    return response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    throw error;
  }
};


export const searchAndDisplayVideos = async (searchQuery) => {
  try {
    const videos = await fetchYouTubeVideos(searchQuery);
    console.log('Fetched videos:', videos);
    
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    
  }
};
