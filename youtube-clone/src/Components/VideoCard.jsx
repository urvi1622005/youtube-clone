import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="flex flex-col">
      <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover rounded-lg" />
      <div className="mt-2">
        <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
        <p className="text-xs text-gray-500">{video.channel}</p>
        <p className="text-xs text-gray-500">{video.views} views • {video.uploadedAt}</p>
      </div>
    </Link>
  );
};

export default VideoCard;