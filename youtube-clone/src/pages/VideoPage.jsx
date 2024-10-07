import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/VideoCard';

const VideoPage = ({ videos }) => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));
  const recommendedVideos = videos.filter((v) => v.id !== parseInt(id)).slice(0, 5);

  return (
    <div className="flex flex-col md:flex-row">
      <VideoPlayer video={video} />
      <aside className="w-full md:w-80 p-4 border-l">
        <h2 className="font-semibold mb-4">Recommended Videos</h2>
        <div className="space-y-4">
          {recommendedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default VideoPage;