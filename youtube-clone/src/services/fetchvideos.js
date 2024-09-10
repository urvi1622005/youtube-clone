export const fetchYouTubeVideos = async (query, maxResults = 10) => {
    try {
      const params = {
        part: 'snippet',
        maxResults: maxResults,
        key: API_KEY
      };
  
      if (query.length === 11) {
        // Assuming it's a video ID
        params.id = query;
        params.part = 'snippet,player';
      } else {
        // Assuming it's a search query
        params.q = query;
        params.type = 'video';
      }
  
      const response = await axios.get(API_URL, { params });
  
      return response.data.items.map(item => ({
        id: item.id.videoId || item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        embedHtml: item.player?.embedHtml
      }));
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      throw error;
    }
  };
  