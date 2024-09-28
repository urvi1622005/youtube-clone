// import axios from 'axios';


// const API_KEY = 'https://pixabay.com/api/videos/'; 
// const API_URL = '45732391-f756039ab92580501d5bae5f9';

// export const fetchYouTubeVideos = async (query, maxResults = 10) => {
//   try {
//     const response = await axios.get(API_URL, {
//       params: {
//         part: 'snippet',
//         q: query,
//         type: 'video',
//         maxResults: maxResults,
//         key: API_KEY
//       }
//     });

//     return response.data.items.map(item => ({
//       id: item.id.videoId,
//       title: item.snippet.title,
//       description: item.snippet.description,
//       thumbnail: item.snippet.thumbnails.medium.url,
//       channelTitle: item.snippet.channelTitle,
//       publishedAt: item.snippet.publishedAt
//     }));
//   } catch (error) {
//     console.error('Error fetching YouTube videos:', error);
//     throw error;
//   }
// };


// export const searchAndDisplayVideos = async (searchQuery) => {
//   try {
//     const videos = await fetchYouTubeVideos(searchQuery);
//     console.log('Fetched videos:', videos);
    
//   } catch (error) {
//     console.error('Failed to fetch videos:', error);
    
//   }
// };
import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
      setLoading(false);
    });
  };
  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);